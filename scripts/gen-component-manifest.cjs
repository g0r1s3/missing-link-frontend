// scripts/gen-component-manifest.cjs
const rdt = require('react-docgen-typescript')
const fg = require('fast-glob')
const fs = require('node:fs/promises')
const path = require('node:path')
const prettier = require('prettier')

;(async () => {
    const files = await fg(
        [
            'src/components/**/*.{tsx,ts}',
            '!src/components/**/*.stories.*',
            '!src/components/**/__tests__/**',
            '!src/components/**/*.{spec,test}.*',
        ],
        { absolute: true }
    )

    const parser = rdt.withCustomConfig('tsconfig.json', {
        savePropValueAsString: true,
        skipChildrenPropWithoutDoc: false,
        shouldExtractLiteralValuesFromEnum: true,
    })

    const docs = parser.parse(files)

    const manifest = {}
    for (const comp of docs) {
        const name = comp.displayName
        if (!name) continue
        const propsOut = {}
        for (const [propName, prop] of Object.entries(comp.props ?? {})) {
            propsOut[propName] = {
                type: prop.type?.name ?? 'unknown',
                required: !!prop.required,
                default: prop.defaultValue?.value ?? undefined,
                description: prop.description || undefined,
            }
        }
        manifest[name] = { props: propsOut }
    }

    const outTs = `// AUTO-GENERATED FILE. Do not edit manually.
export const components = ${JSON.stringify(manifest, null, 2)} as const;
export type ComponentManifest = typeof components;
`

    const prettierConfig = await prettier.resolveConfig(process.cwd())
    const prettyTs = await prettier.format(outTs, {
        ...(prettierConfig ?? {}),
        parser: 'typescript',
    })

    const outPath = path.join('src', 'components', 'manifest.ts')
    await fs.mkdir(path.dirname(outPath), { recursive: true })
    await fs.writeFile(outPath, prettyTs, 'utf8')
    console.log(`✔ Wrote manifest to ${outPath}`)
})()
