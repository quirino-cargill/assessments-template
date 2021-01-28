import IBaseAPI from "../types/interfaces/IBaseApi";
import Country from "../types/models/country";

interface ICountryService extends IBaseAPI {
    set(data: Country[]): void;
    sortData(prop: keyof Country, asc: boolean): Country[];
}

export default ICountryService;