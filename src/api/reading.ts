import { libreApiLink, options, trendArray } from "../constants"
import { BloodGlucoseData } from "../types"
import { userToken } from ".."

export async function getReading(): Promise<BloodGlucoseData> {

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
        $.data[0].glucoseMeasurement.isHigh ? "high" 
        :  $.data[0].glucoseMeasurement.isLow ? "low"
        : "inRange",
        trend: trendArray[$.data[0].glucoseMeasurement.TrendArrow - 1]
    }

    return reading
}