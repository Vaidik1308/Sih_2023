import React,{useState} from 'react'
import { Autocomplete,TextField,Typography } from '@mui/material';
import pic1 from '../assets/MentorLogin/Circle.png'
import pic2 from '../assets/MentorLogin/circle2.png'




const gender = ['male', 'female'];
const MentorSignUp = () => {
    const [genderType, setGenderType] = useState<string | null>(gender[0]);
    const [inputGender, setInputGender] = useState<string>('');
    const [dob, setDob] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');


    const handleSubmit = () => {
        
    }
  return (
    <main className='w-[90%] mx-auto'>
        <section className='w-[50%] flex flex-col gap-2'>
            <h2 className='text-[3.5rem] font-[600] text-[#ED8129]'>Mentorship Programme</h2>
            <div className='text-[1.2rem]'>
                <p>Fill the below details and become a </p>
                <p className='text-[#0CB407]'>Mentor</p>
            </div>
        </section>
        <section className='w-full mt-6 flex justify-start gap-48'>
            <form className='w-[35%] flex flex-col gap-2' onSubmit={(e) => e.preventDefault()}>
                <div className='flex flex-col w-full h-fit p-1 text-[1.125rem] gap-1'>
                    <label htmlFor="mentorFullName">Full Name</label>
                    <input 
                        type="text"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)} 
                        className='border-solid h-[5vh] rounded-md border-gray-400 p-2 w-[95%] outline-none border-[1px]'
                        name="mentorFullName" 
                        id="mentorFullName" 
                    />
                </div>
                <div className='flex flex-col w-full h-fit p-1 text-[1.125rem] gap-1'>
                    <label htmlFor="MentorPhoneNo">Phone Number</label>
                    <input 
                        type="text" 
                        className='border-solid h-[5vh] rounded-md border-gray-400 p-2 w-[95%] outline-none border-[1px]'
                        name="MentorPhoneNo" 
                        id="MentorPhoneNo" 
                    />
                </div>
                <div className='flex flex-col w-full h-fit p-1 text-[1.125rem] gap-1'>
                    <label htmlFor="mentorEmail">Email</label>
                    <input 
                        type="email" 
                        className='border-solid h-[5vh] rounded-md border-gray-400 p-2 w-[95%] outline-none border-[1px]'
                        name="mentorEmail" 
                        id="mentorEmail" 
                    />
                </div>
                
                <div className='flex w-[70%]  justify-start gap-3'>
                    {/* parallel fileds */}
                    <div className=' w-[50%]'>
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
                            sx={{ width: "100%",borderRadius:"8px !important" }}
                            renderInput={(params) => <TextField  {...params} label="" />}
                        />
                    </div>
                    <div className='w-[50%]'>
                        <Typography sx={{fontSize:"18px"}}>Date</Typography>
                        <TextField 
                            size='small' 
                            sx={{width:"100%",borderRadius:"8px !important"}} 
                            type='date'
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />

                    </div>
                </div>
                <div className='mt-8 w-[100%] flex justify-center'>
                    <button className=' rounded-md font-[600] h-[7vh] w-[40%] bg-[#ED8129] text-white p-2'>Submit</button>
                </div>
            </form>
            <article className=' bg-mentor_login w-[45%] h-[45vh] bg-cover bg-center bg-no-repeat rounded-md flex flex-col justify-center items-center gap-6'>
                <div className=' font-[600] text-[1.75rem]'>
                    <h1>What is the
                         <span className='text-[#ED8129]'> mentorship </span> 
                         <span className='text-[#0DB20D]'>programme</span>
                         ?
                    </h1>
                </div>   
                <div className=' justify-center w-[80%] ml-1 '>
                    <p>
                    Mentorship Program in Gramin Shiksha Sahyog enables you to become a rural social worker at grassroot level.  You can provide counselling to the needy rural youth on their education, career choices and businesses. 
                    </p>
                </div>
                <div className='text-[2rem] font-[600]'>
                    <p>Join us and become a 
                        <span className='text-[#ED8129]'> real </span>
                        <span className='text-[#0DB20D]'>HER0</span>
                        !
                    </p>
                </div>
            </article>
            <div className=' right-[600px] -z-10  absolute bottom-4 w-[20%]'>
                <img className="w-[100%]" src={pic1}  alt="" />
            </div>
            <div className=' right-[0] -z-10  absolute top-4 w-[30%]'>
                <img className="w-[100%]" src={pic2}  alt="" />
            </div>
        </section>
    </main>
  )
}

export default MentorSignUp