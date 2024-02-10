import { LLU_LOGIN, LLU_READINGS, OPTIONS } from "./utils"

type LibreCredentials = {
    email: string
    password: string
}

//TODO think of a better name? Idk...
type TokenData = {
    token: string
    tokenExpirationTimestamp: number
}

type LibreLoginError = {
    status: number
    name: string
    message: string
}

export const LibreClient = (credentials: LibreCredentials) => {

    /**
     * Returns the token and the token expiration timestamp or returns an error with the status, name and message.
     * 
     * @param {LibreCredentials} credentials
     * @return {*}  {Promise<TokenData>}
     */
    const token = async (token?: string): Promise<TokenData | LibreLoginError> => {
        //TODO Work on fixing if ("token" in response) type thing...



        OPTIONS.body = JSON.stringify(credentials)
        OPTIONS.method = "POST"
        OPTIONS.headers.authorization = undefined
        
        const $ = await fetch(LLU_LOGIN, OPTIONS).then(res => res.json())
        if ($.status) {
            switch($.status) {
                case 2:
                    return {
                        status: $.status,
                        name: "credentials",
                        message: "Invalid credentials. Try checking if the entered credentials are correct."
                    }
                case 429:
                    return {
                        status: $.status,
                        name: "locked",
                        message: "Too many login attempts with false credentials. Please retry later."
                    }
                default: 
                    return {
                        status: Infinity,
                        name: "Unkown error",
                        message: "Unkown error, probably too many requests => Code: 429"
                    }
            }
        }


        // We now have the token we can set it in the headers, we will only use GET requests from now on, so we remove the body.
        OPTIONS.headers.authorization = `Bearer ${$.data.authTicket.token}`
        OPTIONS.body = undefined
        OPTIONS.method = 'GET'

        return {
            token: $.data.authTicket.token,
            tokenExpirationTimestamp: $.data.authTicket.expires
        }

    }
    
    const read = async (): Promise<any> => { //! Change that asap    
        let tokenTS: number | null = null;    
        if (!OPTIONS.headers.authorization) {
            const tokenResponse = await token()
            if ("token" in tokenResponse) {
                tokenTS = tokenResponse.tokenExpirationTimestamp
            }
        }
        
        const $: any = await fetch(LLU_READINGS, OPTIONS).then(res => res.json())

        switch($.message) {
            case undefined:
                break;
            case "invalid or expired jwt":
                const tokenResponse = await token() //Generate a new token if the one in use is corrupted
                if ("token" in tokenResponse) {
                    tokenTS = tokenResponse.tokenExpirationTimestamp
                } 
                console.warn("Invalid or expired JWT. Attempted to create new JWT, retrying the request.")
                return await read()
            case "missing or malformed jwt":
                throw new Error("Unexpected error: missing or malformed jwt")
            default:
                throw new Error($.message)
        }

        if ($.status !== 0) throw new Error("Unexpected API error. Please try again later.")

        return {
            value: $.data[0].glucoseMeasurement.ValueInMgPerDl,
            trendArrow: $.data[0].glucoseMeasurement.TrendArrow,
            trendMessage:  $.data[0].glucoseMeasurement.TrendMessage,
            targetLow: $.data[0].targetLow,
            targetHigh: $.data[0].targetHigh,
            isHigh:  $.data[0].glucoseMeasurement.ValueInMgPerDl >  $.data[0].targetHigh,
            isLow: $.data[0].glucoseMeasurement.ValueInMgPerDl <  $.data[0].targetLow,
            measurementColor: $.data[0].glucoseMeasurement.MeasurementColor,
            tokenExpirationTimestamp: tokenTS
        }
    }

    return {
        read,
        token
    }
}