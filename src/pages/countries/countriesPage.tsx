import React, { useEffect, useState } from "react";

import CountryList from "../../components/countryList/countryList";
import Country from "../../types/models/country";
import Dropdown from "../../components/dropdown/dropdown";
import DropdownListItem from "../../types/models/dropdownListItem";
import SortBy from "../../types/models/sortBy";

import "./countriesPage.css";

const countryService = require("../../services/countryService")();

const sortByOptions: DropdownListItem[] = [
    {
        name: "Country (ASC)",
        key: "country-ascending",
        id: "0"
    },
    {
        name: "Country (DESC)",
        key: "country-descending",
        id: "1"
    },
    {
        name: "Population (low-high)",
        key: "population-ascending",
        id: "2"
    },
    {
        name: "Population (high-low)",
        key: "population-descending",
        id: "3"
    },
    {
        name: "Clear",
        key: "clear",
        id: "4"
    }

];

const CountriesPage = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [sortBy, setSortBy] = useState<SortBy>();

    useEffect(() => {
        const fetchCountries = async () => {
            let countries = await countryService.get();
            if (sortBy) {
                countries = countryService.sortData(sortBy.key, sortBy.ascending);
            }
            setCountries(countries);
        }

        fetchCountries();
    });

    const handleSort = (itemSelected: DropdownListItem) => {
        switch (itemSelected.key) {
            case "country-ascending":
                setSortBy({
                    key: "country",
                    ascending: true
                });
                break;
            case "country-descending":
                setSortBy({
                    key: "country",
                    ascending: false
                });
                break;
            case "population-ascending":
                setSortBy({
                    key: "population",
                    ascending: true
                });
                break;
            case "population-descending":
                setSortBy({
                    key: "population",
                    ascending: false
                });
                break;
            default:
                setSortBy(undefined);
        }
    }

    return (
        <div>
            <h1>Countries</h1>
            <div className="country-container">
                <div className="country-list">
                    <div className="country-data-options">
                        <div className="country-filter">FILTER</div>
                        <Dropdown title="Sort" list={sortByOptions} onItemSelected={handleSort} class="country-sortby"/>
                    </div>
                    <CountryList countries={countries}/>
                </div>
                <div className="country-detail"></div>
            </div>
        </div>
    )
}

export default CountriesPage;
