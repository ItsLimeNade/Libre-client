import { type Credentials } from "../src/types";
import { init, getReading } from "../src";

test("Not Authenticated", async () => {
    expect((await init({email:"...", password:"..."})).authenticated).toBe(false)
})

test("API works", async () => {
    const credentials: Credentials = {email:"your@email.com", password:"yourPassword!"} //! Replace this with dummy credentials
    expect((await init(credentials)).authenticated).toBe(true)
    const reading = await getReading()
    expect(() => Number(reading.mesurement.unit)).not.toThrow()
})
