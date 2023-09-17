import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/login/logo.png';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Navbar = () => {
  const location =useLocation()
  const [language, setLanguage] = useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <main className='w-[90%] h-[10vh] flex  justify-between mx-12'>
      <section className='flex w-[65%] gap-4 justify-start'>
        <div className='w-fit h-[10vh] flex items-center'>
          <img className='w-[70%] flex items-center' src={logo} alt="" />
        </div>
        <ul className='flex items-center gap-8 justify-start'>
          <li>
            <Link to="/" className='text-[#ED8129] text-[1.5rem]'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='text-[black] text-[1.45rem]'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='text-[black] text-[1.45rem]'>Contact</Link>
          </li>
          <FormControl sx={{width:200,border:"none !important"}}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              // label="Age1"
              placeholder='Language'
              onChange={handleChange}
            >
              <MenuItem value={"language1"}>language 1</MenuItem>
              <MenuItem value={"language2"}>language 2</MenuItem>
              <MenuItem value={"language3"}>language 3</MenuItem>
            </Select>
          </FormControl>
        </ul>
      </section>
      <section className='w-fit flex gap-10 items-center'>
        <Link className='px-4 p-1' to='/login'>
          <button className='text-[1.5rem]'>Login</button>
        </Link>
        <Link to='/register'>
          <button className='bg-[#0CB407] px-[2.5rem] rounded-[2px] p-1 text-white text-[1.5rem] rounded-lg'>Signup</button>
        </Link>
      </section>
    </main>
  )
}

export default Navbar