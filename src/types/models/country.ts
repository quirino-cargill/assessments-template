import Currency from "./currency";
import Language from "./language";

type Country = {
    alpha2Code: string;
    alpha3Code: string;
    capital: string;
    name: string;
    numericCode: string;
    population: number;

    currencies: Currency[];
    languages: Language[];
}

export default Country;