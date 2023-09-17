import React,{useContext} from  'react'
import pic1 from '../../../assets/ruralAid/ngoFunding1.png'
import DataContext from '../../../context/DataContext'
import { useParams } from 'react-router-dom';
const NgoDetials = () => {
    const {featuresData} = useContext(DataContext);
    const {id} = useParams()
    const data = featuresData.find((item) => item.id.toString() === id)
  return (
    <main className='w-[95%] mx-auto mt-8'>
        <section className='w-[95%] flex  justify-between mx-auto border-b-[2px] border-solid border-[#0CB407] pb-8 '>
            <article className='w-[65%]'>
                <div className='max-w-[85%]'>
                    <h1 className='text-[2rem] font-[600]'>{data.name}</h1>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[1.5rem] font-[500]'>{data.shortdesc}</p>
                    <p className=' justify-center text-[1.125rem]'>{data.desc}</p>
                </div>
            </article>
            <article className='max-w-[30%] w-fit'>
                <img src={pic1} alt="" />
            </article>
        </section>
        <section className='w-[95%] mx-auto my-6'>
            <h1 className='text-[1.4rem] font-[600]'>About the Program</h1>
            <div className='text-[1.125rem]'>
                <p>{data.about}</p>
                <p className='font-[600]' >Amount -{data.amount}</p>
            </div>
        </section>
        <section className='w-[95%] mx-auto my-4'>
            <h1 className='text-[1.4rem] font-[600]'>Requirements</h1>
            <ul className='text-[1.125rem] list-decimal ml-6'>
                {data.requirements.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </section>
        <section className='w-[95%] mx-auto'>
            <h1 className='text-[1.4rem] font-[600]'>Below is the link to apply for this scholarship program</h1>
            <a href="http//:google.com">http//:nehb edcevxe link to form</a>
        </section>
    </main>
  )
}

export default NgoDetials