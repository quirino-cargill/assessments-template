import React, { useEffect, useState } from "react"

import Country from "../../types/models/country";

const CountryListItem = (props: any) => {
    const [country, setCountry] = useState<Country>();

    useEffect(() => {
        setCountry(props.country);
    }, [props]);

    return (
        <div className="data-row" onClick={() => props.onRowSelected(props.country)}>
            <div className="data-column">
                {country?.name}
            </div>
            <div className="data-column">
                {country?.alpha2Code}
            </div>
            <div className="data-column">
                {country?.population}
            </div>
        </div>
    );
}

export default CountryListItem;