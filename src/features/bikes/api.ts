// src/features/bikes/api.ts
import { fetchJson } from '../../lib/http'

export type Bike = {
    id: string
    brand: string
    model?: string
    color?: string
    year?: number
    frame_number?: string
    purchase_date?: string // YYYY-MM-DD
    weight_kg?: number
    brake_type?: string
    tire_size?: string
}

export async function getMyBikes(): Promise<Bike[]> {
    return fetchJson<Bike[]>('/api/v1/bikes')
}

export async function getBike(id: string): Promise<Bike> {
    return fetchJson<Bike>(`/api/v1/bikes/${id}`)
}

export async function createBike(input: Omit<Bike, 'id'> & { brand: string }): Promise<Bike> {
    return fetchJson<Bike>('/api/v1/bikes', { method: 'POST', body: input })
}

export async function updateBike(id: string, input: Partial<Omit<Bike, 'id'>>): Promise<Bike> {
    return fetchJson<Bike>(`/api/v1/bikes/${id}`, { method: 'PUT', body: input })
}

export async function deleteBike(id: string): Promise<void> {
    await fetchJson<void>(`/api/v1/bikes/${id}`, { method: 'DELETE' })
}