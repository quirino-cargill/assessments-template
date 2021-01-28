import IBaseApi from "../types/interfaces/IBaseApi";

const get = async (): Promise<any> => {
    return await fetch(
        'https://restcountries.eu/rest/v2/all',
        {
            method: "GET"
        }
    )
    .then(async (response) => {
        if (response.ok) {
            return await response.json();
        } else {
            console.log(`${response.status} response in CountryService.get() - Unable to get Countries`);
        }
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = (): IBaseApi => {
    return {
        get: get
    }
}