// src/lib/http.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

type FetchJsonOptions = {
  method?: HttpMethod
  body?: unknown
  token?: string | null
  headers?: Record<string, string>
}

/**
 * Kleiner Helfer, um aus unbekanntem JSON eine nutzbare Fehlermeldung zu lesen.
 */
function extractMessage(obj: unknown): string | undefined {
  if (obj && typeof obj === 'object') {
    const rec = obj as Record<string, unknown>
    const candidate = rec.message ?? rec.detail ?? rec.error ?? rec.errors

    if (typeof candidate === 'string') {
      return candidate
    }
    if (candidate && typeof candidate === 'object') {
      try {
        return JSON.stringify(candidate)
      } catch {
        // ignore
      }
    }
    try {
      return JSON.stringify(rec)
    } catch {
      // ignore
    }
  }
  return undefined
}

export async function fetchJson<T>(path: string, options: FetchJsonOptions = {}): Promise<T> {
  const {
    method = 'GET',
    body,
    token = localStorage.getItem('auth_token'),
    headers = {},
  } = options

  // Token normalisieren: falls "Bearer ..." gespeichert wurde, entfernen
  const normalizedToken = token ? token.replace(/^Bearer\s+/i, '') : null

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(normalizedToken ? { Authorization: `Bearer ${normalizedToken}` } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    credentials: 'include', // falls dein Backend Cookies nutzt
  })

  const contentType = res.headers.get('content-type') ?? ''
  const isJson = contentType.includes('application/json')

  let data: unknown = null
  if (isJson) {
    try {
      data = await res.json()
    } catch {
      // defensiv: bei ungültigem JSON nicht crashen
      data = {}
    }
  }

  if (!res.ok) {
    const detailed = isJson ? extractMessage(data) : undefined
    const fallback = `Request failed (${res.status})`
    const message = detailed ? `${fallback}: ${detailed}` : fallback
    throw new Error(message)
  }

  return data as T
}
