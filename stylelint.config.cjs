/** @type {import('stylelint').Config} */
module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-declaration-strict-value", "stylelint-order"],

  rules: {
    /* 1) Nur var(--...) erzwingen */
    "scale-unlimited/declaration-strict-value": [
      [
        "/^color$/",
        "/^background(-color)?$/",
        "/^border(-top|-right|-bottom|-left)?(-color)?$/",
        "fill",
        "stroke",
        "box-shadow",
        "/^margin/",
        "/^padding/",
        "gap",
        "border-radius"
      ],
      {
        ignoreValues: { "/.*/": ["transparent", "inherit", "currentColor"] },
        message: "Nur CSS-Variablen (var(--...)) verwenden – siehe theme.css."
      }
    ],

    /* Longhands sind erlaubt (Shorthands kollidieren mit var(--…)-Policy) */
    "declaration-block-no-redundant-longhand-properties": null,

    /* Kommentare nicht so streng */
    "comment-empty-line-before": null,

    /* 2) Allowed-List je Property */
    "declaration-property-value-allowed-list": {
      // Textfarben
      "/^color$/": [
        /^var\(--color-[a-z0-9-]+\)$/i,
        /^var\(--panel-text\)$/i,
        /^var\(--btn-primary-text\)$/i,
        /^var\(--on-surface\)$/i
      ],

      // Hintergründe
      "/^background(-color)?$/": [
        /^var\(--color-[a-z0-9-]+\)$/i,
        /^var\(--panel-bg\)$/i,
        /^var\(--surface\)$/i,
        /^var\(--btn-primary-bg\)$/i,
        /^var\(--btn-primary-bg-active\)$/i,
        /^var\(--btn-ghost-bg\)$/i,
        /^var\(--btn-ghost-bg-hover\)$/i,
        /^var\(--footer-link-bg\)$/i,
        /^var\(--footer-link-bg-hover\)$/i,
        /^var\(--scrim\)$/i
      ],

      // Border-Farben
      "/^border(-top|-right|-bottom|-left)?(-color)?$/": [
        /^var\(--color-[a-z0-9-]+\)$/i,
        /^var\(--panel-border\)$/i,
        /^var\(--border-color\)$/i,
        /^var\(--border-color-strong\)$/i
      ],

      // Vektorfarben
      "fill":   [/^var\(--color-[a-z0-9-]+\)$/i],
      "stroke": [/^var\(--color-[a-z0-9-]+\)$/i],

      // Schatten / Focus
      "box-shadow": [
        /^var\(--shadow-[0-9]+\)$/i,
        /^var\(--panel-shadow\)$/i,
        /^var\(--focus-ring\)$/i
      ],

      // Abstände
      "/^margin/":  [/^var\(--space-[a-z0-9-]+\)(\s+var\(--space-[a-z0-9-]+\))?$/i],
      "/^padding/": [/^var\(--space-[a-z0-9-]+\)(\s+var\(--space-[a-z0-9-]+\))?$/i],
      "gap":        [/^var\(--space-[a-z0-9-]+\)(\s+var\(--space-[a-z0-9-]+\))?$/i],


      // Rundungen
      "border-radius": [/^var\(--radius-[a-z0-9-]+\)$/i]
    },

    /* Ordnung/Format */
    "order/properties-alphabetical-order": true,
    "declaration-empty-line-before": null
  },

  /* WICHTIG:
     - In Komponenten-CSS: KEINE Namens-Pattern-Prüfung für var(--…).
     - NUR in theme.css erzwingen wir saubere Variablennamen. */
  overrides: [
    // Nur in der Theme-Datei: strenge Namens-Pattern (Liste erweitert um deine neuen Familien)
    {
      files: ["src/styles/theme.css"],
      rules: {
        "custom-property-pattern":
          "^(--color-[a-z0-9-]+|--space-[a-z0-9-]+|--radius-(xs|sm|md|lg|xl|full)|--radius-[a-z0-9-]+|--shadow-[0-9]+|--panel-(bg|text|border|shadow)|--surface|--on-surface|--on-accent|--border-color(-strong)?|--focus-ring|--input-(bg|text|border|border-hover|border-focus|shadow-focus|placeholder)|--btn-(primary-(bg|bg-active|text)|ghost-(bg|bg-hover))|--footer-link-(bg|bg-hover)|--link(-hover)?|--container-(sm|md|lg|xl)|--opacity-[0-9]+|--scrim|--z-[a-z0-9-]+)$"
      }
    },
    // In ALLEN anderen Dateien: Pattern-Prüfung deaktivieren
    {
      files: ["**/*.css", "**/*.scss"],
      ignoreFiles: ["src/styles/theme.css"],
      rules: {
        "custom-property-pattern": null
      }
    }
  ]
}
