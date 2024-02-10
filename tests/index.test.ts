import { LibreClient } from "../src";


test("Getting a successfull reading!", async () => {
    const { read } = LibreClient({email: "wrongEmail@gmail.com",password: "wrongPassword"}) //! Replace with real password and email here

    console.log(await read())
})

test("Token returns error response", async () => {
    const { token } = LibreClient({email: "wrongEmail@gmail.com",password: "wrongPassword"}) //! Fake email and password here

    const tokenObject = await token()
    if ("status" in tokenObject) {
        expect(typeof tokenObject.status).toBe("number")
        expect(typeof tokenObject.name).toBe("string")
        expect(typeof tokenObject.message).toBe("string")
    } else {
        throw new Error("Got a wrong response")
    }
})

test("Token Returns valid token and expiration date successfully", async () => {
    const { token } = LibreClient({email: "wrongEmail@gmail.com",password: "wrongPassword"}) //! Replace with real password and email here

    const tokenObject = await token()
    if ("token" in tokenObject) {
        expect(typeof tokenObject.token).toBe("string")
        expect(typeof tokenObject.tokenExpirationTimestamp).toBe("number")
    } else {
        throw new Error("Got a wrong response")
    }
})

