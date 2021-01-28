import React from "react";

import Country from "../models/country";
import CountryListItem from "./countryListItem";

const displayCountries = (countries: Country[]) => {
    return countries && Object.entries(countries).map(c => {
        return <CountryListItem key={c[0]} country={c[1]} />;
    });
}

const CountryList = (props: any) => {
    return (
        <div className="country-list">
            { displayCountries(props.countries) }
        </div>
    )
}

export default CountryList;