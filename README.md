# Libre-client
An easy way to get your libre 2/3 CGM data! Inspired by https://github.com/DiaKEM/libre-link-up-api-client

### Important Reminder
> Under no circumstances should this package be used as a primary tool for medical purposes. Always rely on the guidance of qualified healthcare professionals to make informed decisions about your health.

## Documentation

### How to use Libre-client?
First you need to install it :  
```npm install libre-client```

Then you need to initialize it : 

```ts
import { LibreClient } from 'libre-client';

// Don't forget to replace the values here with your actual credentials!
const { read } = LibreClient({email: "your@gmail.com", password: "password"})

// Get the blood glucose reading
const reading = await read(); 
```
### The data will be recieved in this format: 
```ts
{
  value: number
  trendArrow: number
  trendMessage: string | null
  targetLow: number
  targetHigh: number
  isHigh: boolean
  isLow: boolean
  measurementColor: number
  tokenExpirationTimestamp: number | null
}
```

### That's it!
#### More features to come soon!
