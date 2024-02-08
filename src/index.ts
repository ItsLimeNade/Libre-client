import { token } from "./api/token";
import { Credentials, AuthResponse} from "./types";

import { getReading } from "./api/reading";
export { getReading };

export let userToken: string;
let userCredentials: Credentials

export async function init(credentials: Credentials): Promise<AuthResponse> {
    userCredentials = credentials
    const response = await token(userCredentials)
    if (response.error == "notAuthenticated") return {authenticated: false};

    //? if the response does not contain an error it only contains the token as a string.
    userToken = response // response = token: string
    return {authenticated: true, token: userToken}
}

export function setToken(token: string): void {
    userToken = token
}
