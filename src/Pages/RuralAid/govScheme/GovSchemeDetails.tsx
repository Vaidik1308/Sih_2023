import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import pic1 from '../../../assets/ruralAid/pic1.png'
import DataContext from '../../../context/DataContext'
const GovSchemeDetails = () => {
    const {featuresData,setField} = useContext(DataContext);
    setField('ruralAidGovtDB')
    const {id} = useParams()
    const data = featuresData.find((course) => ( course?.id.toString() === id?.toString()) )
    console.log(data);
    
  return (
    <>
        {
            data && (
                <main className='w-full mt-8'>
                    <section className='w-[95%] flex  justify-between mx-auto border-b-[2px] border-solid border-[#0CB407] pb-8 '>
                        <article className='w-[65%]'>
                            <div className='max-w-[85%]'>
                                <h1 className='text-[2rem] font-[600]'>AICTE Pragati Scholarship Scheme for Girls</h1>
                            </div>
                            <div>
                                <p className='text-[1.5rem] font-[500]'>For girls pursuing UG</p>
                                <p>Started from 2003</p>
                            </div>
                        </article>
                        <article className='max-w-[30%] w-fit'>
                            <img src={pic1} alt="" />
                        </article>
                    </section>
                    <section>
                        <article className='w-[95%] mx-auto mt-4'>
                            <h2 className='text-[1.5rem] font-[500]'>Eligibility</h2>
                            <ul className=' list-disc w-[80%] m-4 ml-5 text-[1.125rem]'>
                                {data.eligibilitydata && (
                                    data.eligibilitydata.map((item) => (
                                        <li>{item}</li>
                                    ))
                                )}
                            </ul>
                        </article>
                    </section>
                    <section className='w-full'>
                        <article className='w-[95%] mx-auto mt-4'>
                            <h2 className='text-[1.5rem] font-[500]'>Documents</h2>
                            <ul className=' list-disc w-[80%] m-4 ml-5 text-[1.125rem]'>
                            {data.documents && (
                                    data.eligibilitydata.map((item) => (
                                        <li>{item}</li>
                                    ))
                                )}
                            </ul>
                        </article>
                    </section>
                    <section className='w-full flex justify-center items-center' >
                        <button className='w-[50%] text-[1.5rem] font-[600] rounded-lg min-h-[10vh] text-white bg-[#0CB407]' >Enroll Now</button>
                    </section>
                </main>
            )
        }
    </>
  )
}

export default GovSchemeDetails