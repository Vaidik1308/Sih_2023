import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import laptop from '../assets/signUp/laptop.png';
import person from '../assets/signUp/person.png';
import rightCircle from '../assets/signUp/right_circle.png';
import { Autocomplete,TextField,Typography } from '@mui/material';
import { log } from 'console';
import axios from 'axios';



const gender = ['male', 'female'];
const qualification = ['Btech', 'Teacher'];

const Register = () => {
  const [genderType, setGenderType] = useState<string | null>(gender[0]);
  const [inputGender, setInputGender] = useState('');
  const [name,setName] = useState<string>('')
  const [number,setNumber] = useState<string>('')
  const [mail,setMail] = useState<string>('')
  const [date,setDate] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const [qualificationType, setQualificationType] = useState<string | null>(qualification[0]);
  const [inputQualification, setInputQualification] = useState('');
  const [data ,setData] = useState({})

  const handleSubmit = () => {
    if(name){
      const newData = {
        username : name,
        password:password,
        email:mail,
        phone:number,
        gender:inputGender,
        DOB:date
      }
      setData(newData)
      console.log(newData);
    }
    
  }
  useEffect(() => {
    const sendData = async () => {
      fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: data }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from backend:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    }
   
    sendData()  
  }, [data])
  
  return (
    <main className='flex w-full justify-center items-center  min-h-[100vh] h-fit'>
      <section className='w-[55%] relative flex flex-col items-center gap-3'>
        <div className='absolute -z-10 w-[60%] bottom-[-6.4%] left-0'>
          <img src={person} alt="" />
        </div>
        <article className='flex flex-col items-start w-[60%]'>
          <h1 className='text-[2.5rem] font-[600] text-[#ED8129] w-full'>Create your account</h1>
          <p>Want to contribute to the cause? Join us now as a</p>
          <Link to='/' className='text-[#0CB407]'>contributor</Link>
        </article>
        <form className='flex w-[61%] flex-col justify-start items-start gap-5' onSubmit={(e) => e.preventDefault()}>
          <div className='flex flex-col w-full'>
            <label className='text-[18px]' htmlFor="fullName">Full Name</label>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='bg-[#ffffff] border-[#aeaeae] border-solid focus:border-[#FF8541] rounded-[4px] outline-none border-[1px] p-[0.45rem]'
              type="text" 
              name="fullName" 
              id="fullName" 
              required
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-[18px]' htmlFor="Pnumber">Phone Number</label>
            <input 
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="number" 
              name="Pnumber" 
              id="Pnumber" 
              className='bg-[#ffffff] border-[#aeaeae] border-solid focus:border-[#FF8541] rounded-[4px] outline-none border-[1px]  p-[0.45rem]'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-[18px]' htmlFor="email">Email</label>
            <input 
              type="email" 
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              name="email" 
              id="email" 
              className='bg-[#ffffff] border-[#aeaeae] border-solid focus:border-[#FF8541] rounded-[4px] outline-none border-[1px] p-[0.45rem]'
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='text-[18px]' htmlFor="password">Password:</label>
            <input 
              type="text" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password" 
              id="password" 
              className='bg-[#ffffff] border-[#aeaeae] border-solid focus:border-[#FF8541] rounded-[4px] outline-none border-[1px] p-[0.45rem]'
            />
          </div>
          <div className='flex gap-4 w-full'>
            <div className=''>
              <Typography sx={{fontSize:"18px"}}>Gender</Typography>
              <Autocomplete
                size='small'
                value={genderType}
                onChange={(event, newValue) => {
                  setGenderType(newValue);
                }}
                inputValue={inputGender}
                onInputChange={(event, newInputValue) => {
                  setInputGender(newInputValue);
                }}
                id="controllable-states-demo"
                options={gender}
                sx={{ width: 175,borderRadius:"8px !important" }}
                renderInput={(params) => <TextField  {...params} label="" />}
              />
            </div>
            <div>
              <Typography sx={{fontSize:"18px"}}>Date</Typography>
              <TextField 
                size='small' 
                sx={{width:180,borderRadius:"8px !important"}} 
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

            </div>
          </div>
          <div className='w-full'>
            <Typography sx={{fontSize:"18px"}}>Qualification</Typography>
            <Autocomplete
              value={qualificationType}
              onChange={(event, newValue) => {
                setQualificationType(newValue);
              }}
              inputValue={inputQualification}
              onInputChange={(event, newInputValue) => {
                setInputQualification(newInputValue);
              }}
              id="qualification"
              options={qualification}
              size='small'
              sx={{ width: "100%", }}
              renderInput={(params)  => <TextField   {...params} label="" />}
            />
          </div>
          <div className='flex justify-center w-full items-center h-[15vh]'>
            <button onClick={() => handleSubmit()}  type='submit' className='bg-[#ED8129] text-[white] text-[1.3rem] w-[35%] p-1 rounded-[8px]'>Signup </button>
          </div>
        </form>
      </section> 
      <section className='relative w-[55%]'>
        <img src={rightCircle} className='absolute -z-10 right-0 top-[-2%] w-[45%]' alt="" />
        <img className='w-[100%] relative right-[5%] top-[5px]' src={laptop} alt="" />
      </section> 
    </main>
  )
}

export default Register