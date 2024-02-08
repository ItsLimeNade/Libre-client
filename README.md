# Libre-client
An easy way to get your libre 2/3 CGM data!

### Important Reminder
> Under no circumstances should this package be used as a primary tool for medical purposes. Always rely on the guidance of qualified healthcare professionals to make informed decisions about your health.

## Documentation

### How to use Libre-client?
First you need to install it :  
```npm install libre-client```

Then you need to initialize it : 

```ts
import { init, getReading } from 'libre-client';

await init({email:"your@email.com", password:"YourPassWord!"}); // Initialize the package
const response = await getReading(); //get the Blood Glucose reading
```
### The data will be recieved in this format: 
```ts
{
  mesurement: {
    value: number
    unit: "mg/dl" | "mmol"
  },
  status: "low" | "inRange" | "high",
  trend: "⬇️" | "↘️" | "➡️" | "↗️" | "⬆️"
}
```
### If you already have an authentication token you can manualy set it:
```ts
import { setToken } from 'libre-client';

setToken("yourTokenHere");
```
### That's it!
#### More features to come soon!
