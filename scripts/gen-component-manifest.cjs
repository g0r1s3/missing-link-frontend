// scripts/gen-component-manifest.cjs
/* eslint-disable no-console */
const rdt = require('react-docgen-typescript')
const fg = require('fast-glob')
const fs = require('node:fs/promises')
const fssync = require('node:fs')
const path = require('node:path')
const prettier = require('prettier')

// ---- Konfiguration über ENV -------------------------------------------------
const PUBLIC_ONLY = process.env.PUBLIC_ONLY !== '0' // true = nur öffentliche/own Props
const INCLUDE_DOM = process.env.INCLUDE_DOM === '1' // true = DOM/ARIA/Event-Props behalten
const WRITE_MD = process.env.DOC_MD === '1'         // true = zusätzlich Markdown schreiben

// optional: nur "öffentliche" Komponenten aus dem Barrel nehmen
const USE_BARREL = true
const BARREL_PATH = 'src/components/index.ts'

// DOM/React-typische Eltern-Typen, die wir i. d. R. filtern
const PARENT_TYPE_BLOCKLIST = [
    'HTMLAttributes',
    'InputHTMLAttributes',
    'TextareaHTMLAttributes',
    'ButtonHTMLAttributes',
    'AnchorHTMLAttributes',
    'AriaAttributes',
    'DOMAttributes',
]

// Prop-Namen, die wir (auch ohne Beschreibung) trotzdem behalten wollen
const CORE_KEEP_PROPS = new Set(['className', 'style', 'id', 'name'])

// Regex-Filter für prop-Namen (DOM/ARIA/Event)
const RE_OMIT_NAME = /^(aria-|data-|on[A-Z]|role$)/

// ---------------------------------------------------------------------------

;(async () => {
    // 1) Quelldateien finden
    let files = await fg(
        [
            'src/components/**/*.{tsx,ts}',
            '!src/components/**/*.stories.*',
            '!src/components/**/__tests__/**',
            '!src/components/**/*.{spec,test}.*',
            '!src/components/**/manifest.*',
        ],
        { absolute: true }
    )

    // Optional: auf "öffentliche" Komponenten (Barrel) einschränken
    let publicNames = null
    if (USE_BARREL && fssync.existsSync(BARREL_PATH)) {
        const barrel = await fs.readFile(BARREL_PATH, 'utf8')
        // sehr einfache Extraktion häufiger Muster:
        const names = new Set()
        // export { Button, TextField } from './...'
        const m1 = barrel.matchAll(/export\s*\{\s*([^}]+)\s*\}\s*from\s*['"][^'"]+['"]/g)
        for (const m of m1) {
            const inner = m[1]
            inner
                .split(',')
                .map((s) => s.trim())
                .filter(Boolean)
                .forEach((n) => {
                    // unterstützt "Comp as Alias"
                    const alias = n.split(/\s+as\s+/i).pop()
                    if (alias) names.add(alias.trim())
                })
        }
        // export { default as Button } from './Button'
        const m2 = barrel.matchAll(/export\s*\{\s*default\s+as\s+([A-Za-z0-9_]+)\s*\}\s*from\s*['"][^'"]+['"]/g)
        for (const m of m2) names.add(m[1])
        publicNames = names
    }

    // 2) Parser vorbereiten (mit oder ohne tsconfig)
    const hasTsconfig = fssync.existsSync(path.join(process.cwd(), 'tsconfig.json'))
    const parser = hasTsconfig
        ? rdt.withCustomConfig('tsconfig.json', {
            savePropValueAsString: true,
            skipChildrenPropWithoutDoc: false,
            shouldExtractLiteralValuesFromEnum: true,
        })
        : rdt.withCompilerOptions(
            {
                target: 'ES2020',
                module: 'ESNext',
                jsx: 'react-jsx',
                allowJs: true,
                esModuleInterop: true,
                skipLibCheck: true,
                moduleResolution: 'Bundler',
            },
            {
                savePropValueAsString: true,
                skipChildrenPropWithoutDoc: false,
                shouldExtractLiteralValuesFromEnum: true,
            }
        )

    // 3) Parsen
    const docs = parser.parse(files)

    // 4) Transform + Filter
    const manifest = {}
    for (const comp of docs) {
        const name = comp.displayName
        if (!name) continue
        if (publicNames && publicNames.size && !publicNames.has(name)) {
            // wenn Barrel aktiv ist und Name nicht re-exported → überspringen
            continue
        }

        const propsOut = {}
        for (const [propName, prop] of Object.entries(comp.props ?? {})) {
            const parentName = prop.parent?.name || ''

            // a) DOM/ARIA/Event-Props rausfiltern (optional abschaltbar)
            const seemsDomParent =
                PARENT_TYPE_BLOCKLIST.some((t) => parentName.includes(t)) ||
                /[A-Za-z]*HTMLAttributes/.test(parentName) ||
                /DOMAttributes/.test(parentName) ||
                /AriaAttributes/.test(parentName)

            const isDomLike =
                seemsDomParent || RE_OMIT_NAME.test(propName)

            if (!INCLUDE_DOM && isDomLike && !CORE_KEEP_PROPS.has(propName)) {
                continue
            }

            // b) "Public only": nur eigene/Docs/relevante Props durchlassen
            const hasDescription = !!(prop.description && prop.description.trim())
            const isRequired = !!prop.required
            const hasDefault = !!prop.defaultValue?.value

            // Heuristik: parentName leer ⇒ eigene Deklaration
            const isOwn = !parentName

            if (
                PUBLIC_ONLY &&
                !isOwn &&
                !hasDescription &&
                !isRequired &&
                !hasDefault &&
                !CORE_KEEP_PROPS.has(propName)
            ) {
                continue
            }

            propsOut[propName] = {
                type: prop.type?.name ?? 'unknown',
                required: isRequired || undefined,
                default: prop.defaultValue?.value ?? undefined,
                description: hasDescription ? prop.description : undefined,
                // parent: parentName || undefined, // zum Debuggen aktivieren
            }
        }

        // Nur aufnehmen, wenn nach Filter noch was übrig ist
        if (Object.keys(propsOut).length > 0) {
            manifest[name] = { props: propsOut }
        }
    }

    // 5) TS-Ausgabe
    const outTs = `// AUTO-GENERATED FILE. Do not edit manually.
export const components = ${JSON.stringify(manifest, null, 2)} as const;
export type ComponentManifest = typeof components;
`
    const prettierConfig = await prettier.resolveConfig(process.cwd())
    const prettyTs = await prettier.format(outTs, {
        ...(prettierConfig ?? {}),
        parser: 'typescript',
    })

    const outTsPath = path.join('src', 'components', 'manifest.ts')
    await fs.mkdir(path.dirname(outTsPath), { recursive: true })
    await fs.writeFile(outTsPath, prettyTs, 'utf8')
    console.log(`✔ Wrote manifest to ${outTsPath}`)

    // 6) Optional: Markdown-Doku erzeugen
    if (WRITE_MD) {
        let md = `# Komponenten-Manifest (öffentlich)\n\n`
        md += `> Generiert: ${new Date().toISOString()}\n\n`

        for (const [compName, data] of Object.entries(manifest)) {
            md += `## ${compName}\n\n`
            md += `| Prop | Typ | Pflicht | Default | Beschreibung |\n`
            md += `|---|---|:---:|---|---|\n`
            for (const [propName, p] of Object.entries(data.props)) {
                const required = p.required ? '✓' : ''
                const def = p.default ?? ''
                const desc = (p.description || '').replace(/\r?\n+/g, ' ').trim()
                md += `| \`${propName}\` | \`${p.type}\` | ${required} | \`${def}\` | ${desc} |\n`
            }
            md += `\n`
        }

        const prettyMd = await prettier.format(md, {
            ...(prettierConfig ?? {}),
            parser: 'markdown',
        })

        const outMdPath = path.join('src', 'components', 'manifest.md')
        await fs.writeFile(outMdPath, prettyMd, 'utf8')
        console.log(`✔ Wrote docs to ${outMdPath}`)
    }
})()
