'use client'

import { ReactNode, createContext, useContext, useState } from "react"

interface IContextType {
    categoryFilters: string[],
    setCategoryFilters: React.Dispatch<React.SetStateAction<string[]>>,
    sort: string,
    setSort: React.Dispatch<React.SetStateAction<string>>

}

export const INITIAL_FILTER_DATA = {
    categoryFilters: [],
    setCategoryFilters: ()=> [],
    sort: '',
    setSort: ()=> '',
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({ children } : { children: ReactNode }) => {
    const [categoryFilters, setCategoryFilters] = useState([])
    const [sort, setSort] = useState('-createdAt');

    return (
        <FilterContext.Provider value={{
            categoryFilters,
            setCategoryFilters,
            sort,
            setSort
            }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)