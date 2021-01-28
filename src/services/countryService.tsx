import Country from "../types/models/country";
import ICountryService from "./iCountryService";

let countries: Country[] = [];

const get = async (): Promise<any> => {
    if (countries.length) {
        return countries;
    }
    return await fetch(
        'https://restcountries.eu/rest/v2/all?fields=name;capital;population;currencies;languages;alpha2Code;alpha3Code;numericCode',
        {
            method: "GET"
        }
    )
    .then(async (response) => {
        if (response.ok) {
            countries = await response.json();
            return countries;
        } else {
            console.log(`${response.status} response in CountryService.get() - Unable to get Countries`);
        }
    })
    .catch(err => {
        console.log(err);
    });
}

const sortData = (prop: keyof Country, asc: boolean = true): Country[] => {
    return countries.sort((a: Country, b: Country) => {
        switch (asc) {
            case true:
            default:
                return a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? ((a.name > b.name) ? 1 : -1) : -1;
            case false:
                return a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? ((a.name < b.name) ? 1 : -1) : -1;
        }
    })
}

module.exports = (): ICountryService => {
    return {
        get: get,
        sortData: sortData
    }
}