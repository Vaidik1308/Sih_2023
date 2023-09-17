import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import {FiArrowUpRight} from 'react-icons/fi'
import {AiTwotoneHeart} from 'react-icons/ai'
import SingleJobs from './Alljobs/SingleJobs'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DataContext from '../../context/DataContext'

// import pic1

const AllJobs = () => {
    const [language, setLanguage] = useState('');
    const {featuresData} = useContext(DataContext);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };
  return (
    <>
    <section className='w-[95%] mx-auto flex justify-between items-center min-h-[10vh]'>
        <h2 className='text-[1.75rem] font-[600]'> <span>200</span> jobs available</h2>
        <FormControl sx={{width:200,border:"none !important"}}>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                // label="Age1"
                placeholder='Language'
                onChange={handleChange}
            >
                <MenuItem value={"language1"}>newest </MenuItem>
                <MenuItem value={"language2"}>saved</MenuItem>
                <MenuItem value={"language3"}></MenuItem>
            </Select>
        </FormControl>
    </section>
    <main className='w-[95%] p-4 flex flex-wrap gap-8 justify-between mx-auto'>
        {
            featuresData.map((data) => (
                <SingleJobs  data={data} />
            ))
        }
        
    </main>
    </>
  )
}

export default AllJobs