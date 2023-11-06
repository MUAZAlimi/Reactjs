import { createContext, useEffect, useState } from 'react'
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useState, useEffect } from "react";

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