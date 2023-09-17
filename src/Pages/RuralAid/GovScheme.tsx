import React,{useContext} from 'react'
import Scrollbar from "react-custom-scrollbars";
import SingleScheme from './govScheme/SingleScheme';
import DataContext from '../../context/DataContext'


const GovScheme = () => {
  const {featuresData,setField} = useContext(DataContext);
  return (
    <Scrollbar
    style={{ width: "100%", height: "80vh"  }}
    className="App  "
    autoHide
    removeTracksWhenNotUsed
    >
        <main className='p-4  w-[100%] h-[80vh] mt-8 flex flex-wrap  mx-auto justify-center  gap-4 '>
          {featuresData && featuresData.map((data) => (
            <SingleScheme setField={setField} data ={data}/>

          ))}
            
        </main>
    </Scrollbar>
  )
}

export default GovScheme