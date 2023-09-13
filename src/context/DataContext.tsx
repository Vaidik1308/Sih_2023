import { createContext ,useState,useEffect} from "react";
import * as React from 'react';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [isProgress,setIsProgress] = useState(false)
    const [isLearn,setIsLearn] = useState(true)
    return(
        <DataContext.Provider value={{
            isProgress,setIsProgress,isLearn,setIsLearn
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;