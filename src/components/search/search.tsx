import React, { ChangeEvent, useEffect, useState } from "react";

import "./search.css";

const Search = (props: any) => {
    const [searchValue, setSearchValue] = useState<string>();

    useEffect(() => {
        setSearchValue(props.searchText);
    },[props]);

    const handleSearch = (e: ChangeEvent) => {
        props.onSearch(e);
    }

    return (
        <div className="searchContainer">
            {props.useLabel && ('Search: ')}
            <input type="text" maxLength={props.maxLength} className="searchInput" value={searchValue} placeholder={props.placeholder} onChange={(e: ChangeEvent) => {handleSearch(e)}} />
        </div>
    );
}

export default Search;