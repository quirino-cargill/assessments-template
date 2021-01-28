import React from "react"

import "./countryDetail.css";

const CountryDetail= (props: any) => {
    return (
        <div className="countryDetailContainer">
            {props.country && (
                <div className="countryDetail">
                    <div className="countryDetail__header">
                        {props.country.name}
                    </div>
                    <div className="countryDetail__container">
                        <div className="countryDetail__itemContainer">
                            <div className="countryDetailItem__label">
                                Capital:
                            </div>
                            <div className="countryDetailItem__info">
                                {props.country.capital}
                            </div>
                        </div>
                        <div className="countryDetail__itemContainer">
                            <div className="countryDetailItem__label">
                                Population:
                            </div>
                            <div className="countryDetailItem__info">
                                {props.country.population}
                            </div>
                        </div>
                        <div className="countryDetail__itemContainer">
                            <div className="countryDetailItem__label">
                                Languages:
                            </div>
                            <div className="countryDetailItem__info">
                                <div>LANGUAGE COMPONENT</div>
                            </div>
                        </div>
                        <div className="countryDetail__itemContainer">
                            <div className="countryDetailItem__label">
                                Currencies:
                            </div>
                            <div className="countryDetailItem__info">
                                <div>CURRENCY COMPONENT</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CountryDetail;