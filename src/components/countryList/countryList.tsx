import React from "react";

import CountryListItem from "./countryListItem";
import GridHeader from "../grid/gridHeader";
import DataGridHeader from "../../types/models/dataGridHeader";

const displayCountries = (props: any) => {
    return props.countries && Object.entries(props.countries).map(c => {
        return (
            <CountryListItem key={c[0]} country={c[1]} onRowSelected={props.onRowSelected}/>
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
            { displayCountries(props) }
        </div>
    )
}

export default CountryList;