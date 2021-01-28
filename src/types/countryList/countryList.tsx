import React from "react";

import Country from "../models/country";
import CountryListItem from "./countryListItem";
import GridHeader from "../grid/gridHeader";
import DataGridHeader from "../models/dataGridHeader";

const displayCountries = (countries: Country[]) => {
    return countries && Object.entries(countries).map(c => {
        return (
            <CountryListItem key={c[0]} country={c[1]} />
        );
    });
}

const CountryList = (props: any) => {
    const headers: DataGridHeader[] = [
        {
            name: "Country"
        },
        {
            name: "Population"
        }
    ];
    return (
        <div className="data-grid">
            <GridHeader headers={headers} />
            { displayCountries(props.countries) }
        </div>
    )
}

export default CountryList;