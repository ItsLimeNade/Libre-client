import { token } from "./api/token";
import { Credentials } from "./types";

import { getReading } from "./api/reading";
export { getReading };

export let userToken: string;
let userCredentials: Credentials

export async function init(credentials: Credentials) {
    userCredentials = credentials
    userToken = await token(userCredentials)
}
