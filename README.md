# Assessment Documentation

The main goal of this assessment is to create a React Application using TypeScript in order to show a list of commodities fetched through a provided REST api, and allow the user to search and filter through the fetched commodities. 

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
2. You must use TypeScript for typing your methods, your components and the data structure associated to the Commodotiy entity
3. You must not use any third party JavaScript utility libraries 
4. You can use any style approach you prefer (CSS, CSS Preprocessors, Styled Components, etc.) 
5. You can use any library you like for fetching the data (also the builtin fetch would be totally fine)
6. You can use any testing library for unit testing some of your code (Jest is already setup in the project and ready to be executed through the command `yarn test`)

### Functional Requirements

1. Create a List Component which shows a list of commodities
2. Create a Commodity Component which shows a single commodity item
3. Create a Search Component which allows to filter out the displayed commodities
4. Create a Filter Component which allows to filter the displayed commodities by the available stock exchanges
5. Add tests associated to the filter logic
6. Add styles for displaying the items in a user friendly way
