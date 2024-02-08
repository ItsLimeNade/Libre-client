export type LibreApiLink = `https://api${string}.libreview.io`;

export type TrendArrows = "⬇️" | "↘️" | "➡️" | "↗️" | "⬆️"

export type AuthResponse = {
    authenticated: boolean
    token?: string
}
export interface Credentials {
    email: string
    password: string
};

export interface LibreOptions {
    method: 'POST' | 'GET',
    mode: "cors"
    headers: {
        'accept-encoding': 'gzip'
        'cache-control': 'no-cache'
        connection: 'Keep-Alive'
        'content-type': 'application/json'
        product: 'llu.android'
        version: '4.7.0'
        authorization?: string
    }
    body?: any
};

export interface BloodGlucoseData {
    mesurement: {
        value: number
        unit: "mg/dl" | "mmol"
    },
    status: "low" | "inRange" | "high",
    trend: TrendArrows
}
