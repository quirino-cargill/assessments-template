import React, { useEffect, useState } from "react";

import CountryList from "../types/countryList/countryList";
import Country from "../types/models/country";

const CountriesPage = () => {
    const [countries, setCountries] = useState<Country[]>([]);

    return (
        <div>
            <h1>Countries</h1>
            <CountryList countries={countries}/>
        </div>
    )
}

export default CountriesPage;
