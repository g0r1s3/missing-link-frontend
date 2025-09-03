// src/features/auth/api.ts
import { fetchJson } from '../../lib/http';

export type AuthResponse = {
    token: string;        // passe an, falls dein Backend einen anderen Key nutzt
    user?: {
        id: string | number;
        email: string;
        // weitere Felder je nach Backend
    };
};

export async function registerApi(input: { email: string; password: string; name?: string }) {
    return fetchJson<AuthResponse>('/api/v1/auth/register', {
        method: 'POST',
        body: input,
    });
}

export async function loginApi(input: { email: string; password: string }) {
    return fetchJson<AuthResponse>('/api/v1/auth/login', {
        method: 'POST',
        body: input,
    });
}