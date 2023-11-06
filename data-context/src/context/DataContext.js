import { createContext, useEffect, useState } from 'react'
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";

const DataContext = createContext({}) 

export const DataProvider = ({children}) => {
    return (
        <DataContext.Provider value={{

        }}>
            {children}
        </DataContext.Provider> 
    )
}

export default DataContext