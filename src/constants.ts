import { LibreApiLink, LibreOptions } from "./types";

export const libreApiLink: LibreApiLink = `https://api.libreview.io`;

export const options: LibreOptions = {
    method: 'POST',
    headers: {
        'accept-encoding': 'gzip',
        'cache-control': 'no-cache',
        connection: 'Keep-Alive',
        'content-type': 'application/json',
        product: 'llu.android',
        version: '4.7.0',
    },
};