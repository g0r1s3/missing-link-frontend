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

    const res = await fetch(`${API_BASE_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...headers,
        },
        body: body !== undefined ? JSON.stringify(body) : undefined,
        credentials: 'include', // falls dein Backend Cookies nutzt
    });

    const contentType = res.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');
    const data = isJson ? await res.json().catch(() => ({})) : (null as unknown as T);

    if (!res.ok) {
        const message = isJson && (data as any)?.message ? (data as any).message : `Request failed (${res.status})`;
        throw new Error(message);
    }

    return data as T;
}