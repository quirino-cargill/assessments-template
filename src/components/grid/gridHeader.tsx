import React from "react";

import DataGridHeader from "../../types/models/dataGridHeader";

const displayHeaders = (headers: DataGridHeader[]) => {
    return headers && Object.entries(headers).map(h => {
        const headerConfig = h[1];
        return (
            <div className="data-header-column" key={h[0]}>
                {headerConfig.name}
            </div>
        );
    });
}

const GridHeader = (props: any) => {
    return (
        <div className="data-header-row">
            { displayHeaders(props.headers) }
        </div>
    )
}

export default GridHeader;