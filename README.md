# Requirements

NodeJS - latest, my version 16.13.1

# Installation

- `yarn install`
- `npm install`

## Environment

`.envexample` provides example environment configuration. If no values are specified, the default values will apply.

# Scripts

- `npm run build` - compiles TypeScript code into JavaScript `dist` folder
- `npm run start` - runs previously compiled JavaScript code from `dist` folder
- `npm run dev` - developer mode, allows to freely edit code without rerunning the server

# Endpoints

```http
GET /api/calculateDisselUsageForDistance?distance=10&yearOfProduction=2000&fuelUsagePer100KM=10
```

| Parameter           | Type     | Description                                                                                 |
| :------------------ | :------- | :------------------------------------------------------------------------------------------ |
| `distance`          | `string` | **Required**. Total distance between point A and point B in kilometers                      |
| `yearOfProduction`  | `string` | **Required**. Year of production of the car, number                                         |
| `fuelUsagePer100KM` | `string` | **Required**. Natural number that represents approximate fuel consumption per 100KM, number |

```http
GET /api/probabilityOfUnitInjectorFail?VIN=4JGDA5HB4FA521206
```

| Parameter | Type     | Description                                                   |
| :-------- | :------- | :------------------------------------------------------------ |
| `VIN`     | `string` | **Required**. Not relevant, but customer really wants it here |

# Responses

- success response- on success api returns 'positive' status code with data object which contains expected response

```typescript
{
  "status": number,
  "data"  :
    {
      "field" : string | number
    }
}
```

- error response- on error api returns 'negative' status code with message that is provided in error

```typescript
{
  "status"  : number,
  "message" : string
}
```

## Few words

Thanks for the opportunity to create that api. I tried to make my structure as expandable as possible. I hope my code won't kill your mood.
Waiting for your feedback!
