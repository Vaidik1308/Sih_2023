import React,{useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
import { Autocomplete,TextField,Typography } from '@mui/material';


const visibility = ['all', 'latest'];
const PostsHeader = () => {
    const [verificationType, setVerificationType] = useState<string | null>(visibility[0]);
    const [inputVerification, setInputVerification] = useState('');
    
  return (
    <header className=' border-b-[6px] border-opacity-[0.4] border-solid border-gray-400  min-h-[15vh] w-full flex justify-between px-6 items-center gap-4 mx-auto'>
        <section className='flex gap-2  justify-between w-[95%]'>
            
            <div className='w-[15%]'>
                    {/* <Typography sx={{fontSize:"18px"}}>Visibility</Typography> */}
                    <Autocomplete
                    value={verificationType}
                    onChange={(event, newValue) => {
                        setVerificationType(newValue);
                    }}
                    inputValue={inputVerification}
                    onInputChange={(event, newInputValue) => {
                        setInputVerification(newInputValue);
                    }}
                    id="qualification"
                    options={visibility}
                    size='small'
                    sx={{ width: "100%",marginTop:"5px",outline:"none !important" }}
                    renderInput={(params)  => <TextField    {...params} label="" />}
                    />
            </div>

            <Link className='min-w-[20%] rounded-lg bg-[#0CB407] text-white  '  to={`/mentorFeatures/1/community/communityDetails/1/communityMembers`}>
                <button  className='text-[1.75rem]  font-[500] rounded-sm duration-300 p-2 w-[100%] flex items-center gap-2 justify-center'  >New Post <AiOutlinePlus/> </button>
            </Link>
        </section>
        
        
        
    </header>
  )
}

export default PostsHeader