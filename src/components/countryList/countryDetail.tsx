import React, { useEffect, useState } from "react"

import "./countryDetail.css";

import LanguageList from "../languageList/languageList";
import CurrencyList from "../currencyList/currencyList";
import Country from "../../types/models/country";
import Language from "../../types/models/language";
import Currency from "../../types/models/currency";

const CountryDetail= (props: any) => {
    const [country, setCountry] = useState<Country>();
    const [languages, setLanguages] = useState<Language>()
    const [currencies, setCurrencies] = useState<Currency>()

    useEffect(() => {
        setCountry(props.country);
        if (props.country) {
            setLanguages(props.country.languages);
            setCurrencies(props.country.currencies);
        }
    }, [props]);

    return (
        <div className="countryDetailContainer">
            {props.country && (
                <div className="countryDetail">
                    <div className="countryDetail__header">
                        {country?.name}
                    </div>
                    <div className="countryDetail__container">
                        <div className="countryDetail__itemContainer">
                            <div className="countryDetailItem__label">
                                Capital:
                            </div>
                            <div className="countryDetailItem__info">
                                {country?.capital}
                            </div>
                        </div>
                        <div className="countryDetail__itemContainer">
                            <div className="countryDetailItem__label">
                                Population:
                            </div>
                            <div className="countryDetailItem__info">
                                {country?.population}
                            </div>
                        </div>
                        <div className="countryDetail__itemContainer">
                            <div className="countryDetailItem__label">
                                Languages:
                            </div>
                            <div className="countryDetailItem__info">
                                <div><LanguageList languages={languages} /></div>
                            </div>
                        </div>
                        <div className="countryDetail__itemContainer">
                            <div className="countryDetailItem__label">
                                Currencies:
                            </div>
                            <div className="countryDetailItem__info">
                                <div><CurrencyList currencies={currencies} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CountryDetail;