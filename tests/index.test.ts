import { type Credentials } from "../src/types";
import { init, getReading } from "../src";

test("test", async () => {
    const credentials: Credentials = {email:"your@email.com", password:"yourPassword!"} //! Replace this with dummy credentials
    await init(credentials) // initialize the thing
    const reading = await getReading() //get the bg
    expect(() => Number(reading.mesurement.unit)).not.toThrow()
})

