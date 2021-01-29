import React, { useEffect, useState } from "react";

import Language from "../../types/models/language";

const LanguageListItem = (props: any) => {
    const [language, setLanguage] = useState<Language>();

    useEffect(() => {
        setLanguage(props.language);
    },[props]);

    return (
        <div className="languageList__container">
            {language && (
                <div className="languageList__item">
                    <div className="languageList__itemHeader">
                        {language.name} {' ('}{language.iso639_1}{')'}
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageListItem;