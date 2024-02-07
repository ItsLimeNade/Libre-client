import { LibreApiLink, LibreOptions, TrendArrows } from "./types";

export const libreApiLink: LibreApiLink = `https://api.libreview.io`;

export const trendArray: Array<TrendArrows> =  ["⬇️", "↘️", "➡️", "↗️", "⬆️"]

export let options: LibreOptions = {
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
