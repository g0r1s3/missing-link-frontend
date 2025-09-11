/** @type {import('stylelint').Config} */
module.exports = {
    extends: ["stylelint-config-standard"],
    plugins: ["stylelint-declaration-strict-value", "stylelint-order"],
    rules: {
        /* ------------------------------
         * 1) Nur CSS-Variablen für kritische Werte
         * ------------------------------ */
        "scale-unlimited/declaration-strict-value": [
            [
                // Farben, Hintergründe, Borderfarben, Füllungen, Schatten
                "/^color$/",
                "/^background(-color)?$/",
                "/^border(-top|-right|-bottom|-left)?(-color)?$/",
                "fill",
                "stroke",
                "box-shadow",

                // Spacing & Radius (optional, wenn du auch diese erzwingen willst)
                "/^margin/",
                "/^padding/",
                "gap",
                "border-radius"
            ],
            {
                ignoreValues: {
                    "/.*/": ["transparent", "inherit", "currentColor"]
                },
                // -> zwingt grundsätzlich var(--…)
                message: "Nur CSS-Variablen (var(--...)) verwenden – siehe theme.css."
            }
        ],

        /* ------------------------------
         * 2) Präfix-Whitelist je Property-Gruppe
         * ------------------------------ */
        // Farben nur aus --color-*
        "declaration-property-value-allowed-list": {
            "/^color$/": [/^var\(--color-[a-z0-9-]+\)$/i],
            "/^background(-color)?$/": [/^var\(--color-[a-z0-9-]+\)$/i],
            "/^border(-top|-right|-bottom|-left)?(-color)?$/": [
                /^var\(--color-[a-z0-9-]+\)$/i,
                /^var\(--border-color(?:-strong)?\)$/i // falls du neutrale Border-Tokens nutzt
            ],
            "fill": [/^var\(--color-[a-z0-9-]+\)$/i],
            "stroke": [/^var\(--color-[a-z0-9-]+\)$/i],
            "box-shadow": [/^var\(--[a-z0-9-]+\)$/i], // z. B. --panel-shadow

            // Spacing nur --space-*
            "/^margin/": [/^var\(--space-[a-z0-9-]+\)$/i],
            "/^padding/": [/^var\(--space-[a-z0-9-]+\)$/i],
            "gap": [/^var\(--space-[a-z0-9-]+\)$/i],

            // Radius nur --radius-*
            "border-radius": [/^var\(--radius-[a-z0-9-]+\)$/i]
        },

        /* ------------------------------
         * 3) Variablennamen (wenn ihr eigene definiert)
         *    Nur bestimmte Familien zulassen
         * ------------------------------ */
        "custom-property-pattern":
        // erlaubt: --color-*, --space-*, --radius-*, --panel-*, --surface, --focus-ring, etc.
            "^(--color-[a-z0-9-]+|--space-[a-z0-9-]+|--radius-[a-z0-9-]+|--panel-(bg|text|border|shadow)|--surface|--on-surface|--on-accent|--border-color(-strong)?|--focus-ring)$",

        /* ------------------------------
         * 4) Optional: Verbote, Ordnung, Sauberkeit
         * ------------------------------ */
        "function-disallowed-list": ["rgb", "rgba", "hsl", "hsla"], // zwingt indirekt zu var(--…)
        "color-no-hex": true, // #fff verbieten
        "order/properties-alphabetical-order": true
    },
    overrides: [
        // Falls du CSS Modules nutzt, kannst du hier Ausnahmen definieren:
        { files: ["**/*.module.css"], rules: {} }
    ]
}
