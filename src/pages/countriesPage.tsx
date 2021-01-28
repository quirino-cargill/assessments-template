import React, { useEffect, useState } from "react";

import CountryList from "../types/countryList/countryList";
import Country from "../types/models/country";

const countryService = require("../services/countryService")();

const CountriesPage = () => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const countries = await countryService.get();
            setCountries(countries);
        }

        fetchCountries();
    });

    return (
        <div>
            <h1>Countries</h1>
            <CountryList countries={countries}/>
        </div>
    )
}

export default CountriesPage;
