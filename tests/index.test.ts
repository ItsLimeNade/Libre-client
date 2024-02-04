import { type Credentials } from "../src/types";

import { getBg, init } from "../src";

test("test", async () => {
    const credentials: Credentials = {email:"yourEmail@gmail.com", password:"yourPassword!"} 
    await init(credentials) // initialize the thing
    console.log(await getBg()) //get the bg
})

