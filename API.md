# API Info

Use [Alpha Vantage](https://www.alphavantage.co/) APIs for retrieving market data. 

For further information, you can access the official documentation [here](https://www.alphavantage.co/documentation/)

Use the following as API key as query parameter for authentication, or register for getting your own API Key:
 
`UBOB63ZQCT15M41X`

For the current assessment you need to interact with the two following endpoints exposed by alpha vantage. 

## Symbol Information

This endpoint returns the information associated to the provided symbol.

**Endpoint**: 

`https://www.alphavantage.co/query?function=SYMBOL_SEARCH`

**Query Parameters**:

| Name       |      Description      |  Type  |
|------------|:---------------------:|-------:|
| *keywords* |  The Symbol to lookup | string |

## Daily Time Series

This endpoint returns the daily time series of the specified symbol 

This endpoint returns the information associated to the provided symbol.

**Endpoint**: 

`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED`

**Query Parameters**:

| Name       |      Description      |  Type  |
|------------|:---------------------:|-------:|
| *symbol*   |  The equity Symbol    | string |
