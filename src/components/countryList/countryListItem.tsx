import React, { useEffect, useState } from "react"

const CountryListItem= (props: any) => {
    return (
        <div className="data-row" onClick={() => props.onRowSelected(props.country)}>
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