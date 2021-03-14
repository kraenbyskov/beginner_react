import React, { createContext, useMemo, useState } from "react";



export const DataContext = createContext();

export const DataProvider = (props) => {
    const [GetData, setGetData] = useState(1);

    const value = useMemo(() => ({ GetData, setGetData }), [GetData, setGetData]);


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
};