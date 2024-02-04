import { token } from "./api/token";
import { libreApiLink, options } from "./constants";
import { Credentials } from "./types";


let userToken: string;
let userCredentials: Credentials

export async function init(credentials: Credentials) {
    userCredentials = credentials
    userToken = await token(userCredentials)
}


export async function getBg() {

    options.method = 'GET'
    options.headers.authorization = `Bearer ${userToken}`
    options.body = undefined

    const $: any = await fetch(`${libreApiLink}/llu/connections`, options)
    .then(res => res.json())
    .catch(err => console.error(err))

    return $.data[0].glucoseMeasurement.Value
}