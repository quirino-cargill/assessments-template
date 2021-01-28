import React from "react"

const CountryListItem= (props: any) => {
    return (
        <div className="data-row">
            <div className="data-column">
                {props.country.name}
            </div>
            <div className="data-column">
                {props.country.population}
            </div>
        </div>
    );
}

export default CountryListItem;