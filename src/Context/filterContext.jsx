import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider ({children}) { //CHILDREN es todo a lo que va a proveer nuestro contexto
    const [ filters, setFilters ] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value = {{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}