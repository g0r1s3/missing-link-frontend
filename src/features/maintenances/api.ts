// src/features/maintenances/api.ts
import { fetchJson } from '../../lib/http'

export type Maintenance = {
    id: string
    bike_id: string | number
    performed_at: string // YYYY-MM-DDTHH:MM:SSZ
    is_external: boolean
    description?: string
    vendor?: string
    cost?: number
    mileage_km?: number
    duration_min?: number
    warranty?: boolean
}

export async function getMaintenancesForBike(bikeId: string | number): Promise<Maintenance[]> {
    return fetchJson<Maintenance[]>(`/api/v1/maintenances?bike_id=${encodeURIComponent(String(bikeId))}`)
}

export async function createMaintenance(input: Omit<Maintenance, 'id'> & { bike_id: string | number }): Promise<Maintenance> {
    return fetchJson<Maintenance>('/api/v1/maintenances', { method: 'POST', body: input })
}

export async function getMaintenance(id: string): Promise<Maintenance> {
    return fetchJson<Maintenance>(`/api/v1/maintenances/${id}`)
}

export async function updateMaintenance(id: string, input: Partial<Omit<Maintenance, 'id' | 'bike_id'>>): Promise<Maintenance> {
    return fetchJson<Maintenance>(`/api/v1/maintenances/${id}`, { method: 'PUT', body: input })
}

export async function deleteMaintenance(id: string): Promise<void> {
    await fetchJson<void>(`/api/v1/maintenances/${id}`, { method: 'DELETE' })
}