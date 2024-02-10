export const LLU_LOGIN = "https://api.libreview.io/llu/auth/login"
export const LLU_READINGS = "https://api.libreview.io/llu/connections"
const API_VER = "4.7.0"

interface LibreOptions {
    method: 'POST' | 'GET',
    mode: "cors"
    headers: {
        'accept-encoding': 'gzip'
        'cache-control': 'no-cache'
        connection: 'Keep-Alive'
        'content-type': 'application/json'
        product: 'llu.android'
        version: typeof API_VER
        authorization?: string
    }
    body?: any
};

export let OPTIONS: LibreOptions = {
    method: 'POST',
    mode: 'cors',
    headers: {
        'accept-encoding': 'gzip',
        'cache-control': 'no-cache',
        connection: 'Keep-Alive',
        'content-type': 'application/json',
        product: 'llu.android',
        version: '4.7.0',
    },
};