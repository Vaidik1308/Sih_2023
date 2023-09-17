import React,{useContext} from 'react'
import Scrollbar from "react-custom-scrollbars";
import SingleNgo from './NgoFunding/SingleNgo';
import DataContext from '../../context/DataContext';

const NgoFunding = () => {
  const {featuresData,setField} = useContext(DataContext);

    console.log(featuresData);
    
  return (
    <Scrollbar
    style={{ width: "100%", height: "80vh"  }}
    className="App  "
    autoHide
    removeTracksWhenNotUsed
    >
        <main className='p-4 grid w-[95%] h-[80vh] mt-8  gap-4 grid-cols-2 mx-auto  '>
            {featuresData && (
              featuresData.map((data) => (
                <SingleNgo data={data}/>
              ))
            )}
        </main>
    </Scrollbar>
  )
}

export default NgoFunding