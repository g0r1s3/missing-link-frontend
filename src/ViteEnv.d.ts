/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  // weitere VITE_ Variablen kannst du hier ergänzen
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
