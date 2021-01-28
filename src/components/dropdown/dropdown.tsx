import React, { useEffect, useState } from "react";

import DropdownListItem from "../../types/models/dropdownListItem";

import "./dropdown.css";

const Dropdown = (props: any) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [list, setList] = useState<DropdownListItem[]>([]);

    useEffect(() => {
        setTitle(props.title);
        setList(props.list);
    },[props]);

    const onItemSelected = (item: DropdownListItem) => {
        props.onItemSelected(item);
        // Close the dropdown
        toggleDropdown();
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className={props.class}>
            <button type="button" className="dropdown-button" onClick={toggleDropdown}>
                <div className="dropdown-button-label">{title}</div>
                <div className="flex-spacer"></div>
                <div className="dropdown-sort-icon">{isDropdownOpen ? " -" : " +"}</div>
            </button>
            {isDropdownOpen && (
                <div className="dropdown-list">
                    {list.map((listItem: DropdownListItem) => (
                        <button type="button" className="dropdown-list-item" key={listItem.key} onClick={() => onItemSelected(listItem)} >
                            {listItem.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;