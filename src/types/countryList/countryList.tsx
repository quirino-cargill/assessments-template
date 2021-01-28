import React from "react";

import CountryListItem from "./countryListItem";

const CountryList = (props: any) => {
    return (
        <div className="country-list">
            <CountryListItem {...props} />
        </div>
    )
}

export default CountryList;