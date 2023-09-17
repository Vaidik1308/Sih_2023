import { createContext ,useState,useEffect} from "react";
import * as React from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore"
import {db} from '../config/firebase-config'
import { fetchPost } from "../fetchPost/fetchPost";
import { useLocation } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [isProgress,setIsProgress] = useState(false)
    const [isLearn,setIsLearn] = useState(true)
    const [userData,setUserData] = useState({})
    const [featuresData,setFeaturesData] = useState([])
    const [field,setField] = useState('')
    
    useEffect(() => {
        fetchPost(field,featuresData,setFeaturesData)
    },[field])
    
    const location = useLocation()

    useEffect(() => {
        // setFeaturesData([])
        location?.pathname.includes('/skills') ? setField('coursesDB') : 
        location?.pathname.includes('/ruralaid/govschemes') ?   setField('ruralAidGovtDB') :
        location?.pathname.includes('/ngofunding') ? setField('ngoDB') : 
        location?.pathname.includes('/jobs/alljobs') ? setField('jobDB') : null
    },[location.pathname])
        
    
    
    return(
        <DataContext.Provider value={{
            isProgress,setIsProgress,isLearn,setIsLearn,userData,setUserData,field,setField,featuresData,setFeaturesData
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;