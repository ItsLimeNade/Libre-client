import { libreApiLink, options } from "../globals";
import { Credentials } from "../types";

export async function token(credentials: Credentials) {

    options.body = JSON.stringify(credentials)
    options.method = 'POST'

    const $: any = await fetch(`${libreApiLink}/llu/auth/login`, options)
    .then(res => res.json())
    .catch(err => console.error(err))

    if ($.status === 2) return {error: "notAuthenticated"}
    return $.data.authTicket.token

}