import React, { useState } from "react";

import "./languageList.css";

import Language from "../../types/models/language";
import LanguageListItem from "./languageListItem";

const LanguageList = (props: any) => {
    const [languages] = useState<Language[]>(props.language);

    return (
        <div className="languageListContainer">
            {languages && (
                <div className="languageListItemContainer">
                    {languages.map((language: Language) => (
                        <LanguageListItem language={language} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageList;