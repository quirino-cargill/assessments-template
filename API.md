# API Info

The API for fetching the list of commodities is available performing a GET request to the following endpoint:

```
https://financialmodelingprep.com/api/v3/symbol/available-commodities
```

The Commodities data structure is represented by the following sample:

```json
{
  symbol: "PLUSD", 
  name: "Platinum Apr 20", 
  currency: "USD", 
  stockExchange: "NY Mercantile", 
  exchangeShortName: "COMMODITY"
}
```

The data is available without any CORS issue and without any authentication required.

If for any reason you want to consult the API official documentation, it is avaialable [here](https://financialmodelingprep.com/developer/docs/#Most-of-the-Major-Commodities-(Gold,-Silver,-Oil))
