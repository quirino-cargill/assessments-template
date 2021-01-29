import React, { useEffect, useState } from "react";

import CountryDetail from "../../components/countryList/countryDetail";
import CountryList from "../../components/countryList/countryList";
import Country from "../../types/models/country";
import Dropdown from "../../components/dropdown/dropdown";
import DropdownListItem from "../../types/models/dropdownListItem";
import SortBy from "../../types/models/sortBy";

import "./countriesPage.css";
import Search from "../../components/search/search";


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
    const [selectedCountry, setSelectedCountry] = useState<Country>();
    const [searchText, setSearchText] = useState<string>();
    const [searchType, setSearchType] = useState<string>();

    useEffect(() => {
        fetch(
            'https://restcountries.eu/rest/v2/all?fields=name;capital;population;currencies;languages;alpha2Code;alpha3Code;numericCode',
            {
                method: "GET"
            }
        )
        .then(res => res.json())
        .then(response => {
            let countries: Country[] = response;
            countryService.set(countries);
            if (searchText) {
                countries = countryService.searchData(searchText, searchType);
            }
            if (sortBy) {
                countries = countryService.sortData(sortBy.key, sortBy.ascending);
            }
            setCountries(countries)
        });

    }, [sortBy, searchText, searchType]);

    const handleCodeSearch = (e: any) => {
        const searchText = e.target.value;
        setSearchType('code');
        if (searchText.length === 2) {
            setSearchText(searchText);
        }

    }

    const handleCountrySelected = (country: Country) => {
        setSelectedCountry(country);
    }

    const handleNameSearch = (e: any) => {
        const searchText = e.target.value;
        setSearchType('name');
        if (searchText.length === 2) {
            setSearchText(searchText);
        }
    }


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
                        <div className="country-filter">
                            <Search useLabel="true" placeholder="by name" onSearch={handleNameSearch} />
                            <Search useLabel="false" placeholder="by code" onSearch={handleCodeSearch} maxLength="2" />
                        </div>
                        <Dropdown title="Sort" list={sortByOptions} onItemSelected={handleSort} class="country-sortby"/>
                    </div>
                    <CountryList countries={countries} onRowSelected={handleCountrySelected} />
                </div>
                <div className="flex-spacer"></div>
                <div className="country-detail">
                    <CountryDetail country={selectedCountry} />
                </div>
            </div>
        </div>
    )
}

export default CountriesPage;
