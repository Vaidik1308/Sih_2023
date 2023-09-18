import React ,{useState} from 'react'
import RichTextEditor from '../../Components/RichTextEditor'
import { Autocomplete,TextField,Typography } from '@mui/material';


const visibility = ['public', 'private'];

const CreateCommunity = () => {
    const [verificationType, setVerificationType] = useState<string | null>(visibility[0]);
    const [inputVerification, setInputVerification] = useState('');
    const [desc, setDesc] = useState('');
    console.log(desc);
    
  return (
    <main className='w-[90%] mx-auto mt-4'>
        <section className='w-[45%]'>
        <h1 className='text-[2rem] w-fit font-[500] border-b-[3px] rounded-lg border-solid border-[#FF8C38]'>Create a community</h1>
        </section>
        <section className='w-full flex flex-col gap-3 mt-8 text-[1.125rem]'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="communityName">Community Name</label>
                <input 
                    type="text"
                    className='h-[6vh] outline-none border-solid border-[2px] border-gray-300 rounded-md p-2' 
                    name="" 
                    id="" 
                />
            </div>
            <article className='flex w-full gap-5 items-center justify-center'>
                <div className='w-[50%]'>
                    <Typography sx={{fontSize:"18px"}}>Visibility</Typography>
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
                <div className='flex w-[50%] flex-col gap-1'>
                    <label htmlFor="communityName">Token</label>
                    <input 
                        type="text"
                        className='h-[5.5vh] outline-none border-solid border-[2px] border-gray-300 rounded-md p-2' 
                        name="" 
                        id="" 
                    />
                </div>
            </article>
            <div className='flex flex-col gap-1'>
                <label htmlFor="communityName">Bio</label>
                <input 
                    type="text"
                    className='h-[6vh] outline-none border-solid border-[2px] border-gray-300 rounded-md p-2' 
                    name="" 
                    id="" 
                />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="communityName">Short Description</label>
                <RichTextEditor desc={desc} setDesc={setDesc} />
            </div>
            <div className='mt-4 w-full'>
                <button className=' p-2 text-white rounded-md text-[1.5rem] w-[25%] bg-[#0CB407]'>Create</button>
            </div>
        </section>
    </main>
  )
}

export default CreateCommunity