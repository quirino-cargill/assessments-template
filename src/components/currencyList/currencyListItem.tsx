import React, { useEffect, useState } from "react";

import Currency from "../../types/models/currency";

const CurrencyListItem = (props: any) => {
    const [currency, setCurrency] = useState<Currency>(props.currency);

    useEffect(() => {
        setCurrency(props.currency);
    },[props.currency]);

    return (
        <div className="currencyList__container">
            {currency && (
                <div className="currencyList__item" key={currency.code}>
                    <div className="currencyList__itemHeader">
                        {currency.name} {' ('}{currency.symbol}{')'}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CurrencyListItem;