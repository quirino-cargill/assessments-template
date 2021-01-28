import React from 'react';

import CountriesPage from './pages/countries/countriesPage';
import HomePage from "./pages/homePage";

import "./styles.css";

const displayPage = () => {
    switch (window.location.pathname) {
        case '/countries':
            return <CountriesPage />;
        default:
            return <HomePage />;
    }
}

const App = () => {
  return <div>{displayPage()}</div>;
}

export default App;
