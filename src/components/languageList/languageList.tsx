import React, { useEffect, useState } from "react";

import "./languageList.css";

import Language from "../../types/models/language";
import LanguageListItem from "./languageListItem";

const LanguageList = (props: any) => {
    const [languages, setLanguages] = useState<Language[]>();

    useEffect(() => {
        setLanguages(props.languages);
    }, [props]);

    return (
        <div className="languageListContainer">
            {languages && (
                <div className="languageListItemContainer">
                    {languages.map((language: Language, index: number) => (
                        <LanguageListItem language={language} key={index}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageList;