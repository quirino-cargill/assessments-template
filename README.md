# Assessment Documentation

The main goal of this assessment is to create a React Application using TypeScript in order to show some financial market data associated to a list of stocks fetched through a provided REST api, and allow the user to search and filter through the fetched commodities, and check out some analytics associated to the fetched data 

## Instructions

Fork the current repository and start the skeleton executing the following scripts:

```s
yarn install
yarn start 
```

The application provides a basic setup using **Create React App** with a typescript template. 

The description of the API is available [here](./API.md)

## Requirements

During the implementation, you must accomplish the following functional and technical requirements

### Tech Requirements

1. You must use Hooks and Functional Components
2. You must use TypeScript for typing your methods, your components and the data structures associated (Symbol and Daily Prices)
3. You must not use any third party JavaScript utility libraries 
4. You can use any style approach you prefer (CSS, CSS Preprocessors, Styled Components, etc.) 
5. You can use any library you like for fetching the data (also the builtin fetch would be totally fine)
6. You can use any testing library for unit testing some of your code (Jest is already setup in the project and ready to be executed through the command `yarn test`)

### Functional Requirements

1. Use as default preset of equities at least the following symbols: *IBM, AMZN, AAPL, AMD, GOOG, NFLX, FB, TSLA*
   
2. Show the list the equities with the following information:
   1. Symbol
   2. Associated Name (fetch the name from the APIs, do not hardcode it)
   3. Last Day Market Movement as percentage (show if it was a positive or negative change)

3. Provide a way to filter out equities by name or symbol
   
4. Provide a way to sort equities by the last day market change value as percentage
   
5. Selecting a value from the list, show its prices in the past days fetched through the APis, highlighting if it was a positive/negative day
    
6.  Add tests associated to the filter and sorting features
   
7.  Add styles for displaying the items in a user friendly way
