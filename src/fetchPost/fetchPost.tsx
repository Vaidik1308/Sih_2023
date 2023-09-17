import { collection, addDoc, getDocs } from "firebase/firestore"
import React ,{useState,useContext,useEffect} from 'react'
import {db} from '../config/firebase-config'
import DataContext from "../context/DataContext"


export const fetchPost =  async(field,featuresData,setFeaturesData) => {
    let content;
    await getDocs(collection(db, field))
    .then((querySnapshot)=>{  
        // setFeaturesData('')            
        const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id }));
            setFeaturesData(newData);                
        // console.log(featuresData, newData);
    })
    return content
};

