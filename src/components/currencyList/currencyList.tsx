import React, { useEffect, useState } from "react";

import "./currencyList.css";

import Currency from "../../types/models/currency";
import CurrencyListItem from "./currencyListItem";

const CurrencyList = (props: any) => {
    const [currencies, setCurrencies] = useState<Currency[]>();

    useEffect(() => {
        setCurrencies(props.currencies);
    }, [props]);

    return (
        <div className="currencyListContainer">
            {currencies && (
                <div className="currencyListItemContainer">
                    {currencies.map((currency: Currency, index: number) => (
                        <CurrencyListItem currency={currency} key={index}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CurrencyList;