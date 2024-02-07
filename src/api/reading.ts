import { libreApiLink, options, trendArray } from "../globals"
import { BloodGlucoseData } from "../types"
import { userToken } from ".."

export async function getReading(): Promise<BloodGlucoseData> {

    if (!userToken) throw Error("Error: Attempted to get blood glucose reading without beeing authenticated.")

    options.method = 'GET'
    options.headers.authorization = `Bearer ${userToken}`
    options.body = undefined

    const $: any = await fetch(`${libreApiLink}/llu/connections`, options)
    .then(res => res.json())
    .catch(err => console.error(err))

    const reading: BloodGlucoseData = {
        mesurement: {
            value: $.data[0].glucoseMeasurement.ValueInMgPerDl,
            unit: "mg/dl"
        },
        status:
        $.data[0].glucoseMeasurement.ValueInMgPerDl > $.data[0].targetHigh ? "high" 
        :  $.data[0].glucoseMeasurement.ValueInMgPerDl < $.data[0].targetLow ? "low"
        : "inRange",
        trend: trendArray[$.data[0].glucoseMeasurement.TrendArrow - 1]
    }

    return reading
}