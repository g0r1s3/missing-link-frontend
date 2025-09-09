// src/lib/http.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// @ts-ignore
export async function fetchJson<T>(
    path: string,
    options: {
        method?: HttpMethod;
        body?: unknown;
        token?: string | null;
        headers?: Record<string, string>;
    } = {}
): Promise<T> {
    const { method = 'GET', body, token = localStorage.getItem('auth_token'), headers = {} } = options;

    // Token normalisieren: falls "Bearer ..." gespeichert wurde, entfernen
    const normalizedToken = token ? token.replace(/^Bearer\s+/i, '') : null;

    const res = await fetch(`${API_BASE_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(normalizedToken ? { Authorization: `Bearer ${normalizedToken}` } : {}),
            ...headers,
        },
        body: body !== undefined ? JSON.stringify(body) : undefined,
        credentials: 'include', // falls dein Backend Cookies nutzt
    });

    const contentType = res.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');
    const data = isJson ? await res.json().catch(() => ({})) : (null as unknown as T);

    if (!res.ok) {
        // Versuche, aussagekräftige Fehlermeldung aus dem Body zu holen
        let detailed = ''
        if (isJson && data && typeof data === 'object') {
            const d: any = data
            const candidate = d.message ?? d.detail ?? d.error ?? d.errors
            if (typeof candidate === 'string') {
                detailed = candidate
            } else if (candidate && typeof candidate === 'object') {
                try {
                    detailed = JSON.stringify(candidate)
                } catch {
                    // ignore
                }
            } else {
                try {
                    detailed = JSON.stringify(d)
                } catch {
                    // ignore
                }
            }
        }
        const fallback = `Request failed (${res.status})`
        const message = detailed ? `${fallback}: ${detailed}` : fallback
        throw new Error(message);
    }

    return data as T;
}