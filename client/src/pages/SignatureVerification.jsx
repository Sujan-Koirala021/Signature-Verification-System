import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import addImage from '../images/add.svg'

const SignatureVerification = () => {
    const [selectDocument, setSelectDocument] = useState(false)

    return (
        <>
            <Navbar />
            <hr />
            <div className='bg-gray-50 min-h-[90vh] flex justify-center items-center pt-5 md:pt-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:w-[60%]'>
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='text-2xl mb-14 text-center'>Genuine signature image</h1>
                        <div className='flex justify-center items-center flex-col bg-white h-[15rem] w-[15rem] border rounded-lg hover:shadow-md hover:border-2 hover:shadow-blue-500 hover:border-blue-500 hover:cursor-pointer'>
                            <img src={addImage} alt="" />
                            <span className='mt-5 text-slate-500 text-sm'>Click Here to Upload Signature</span>
                        </div>
                        <div>
                            <button className='bg-blue-500 rounded-3xl w-[15rem] h-10 flex items-center justify-center text-white mt-5 mb-[6.2rem]'>Upload Signature</button>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='text-2xl mb-14 text-center'>Signature image to be verified</h1>
                        <div className='flex justify-center items-center flex-col bg-white h-[15rem] w-[15rem] border rounded-lg hover:shadow-md hover:border-2 hover:shadow-blue-500 hover:border-blue-500 hover:cursor-pointer'>
                            <img src={addImage} alt="" />
                            <span className='mt-5 text-slate-500 text-sm'>Click Here to Upload Signature</span>
                        </div>
                        <div>
                            <button className='bg-blue-500 rounded-3xl w-[15rem] h-10 flex items-center justify-center text-white my-5'>Upload Signature</button>
                            <hr />
                            <button className='bg-blue-500 rounded-3xl w-[15rem] h-10 flex items-center justify-center text-white my-5'>Upload Document</button>
                        </div>
                    </div>
                </div>
                {/* <div className='bg-white min-h-[60vh] w-[25rem]'>
                    How to use?
                </div> */}
                {/* <div>
                    <h1 className='text-3xl font-bold mt-14'>Results</h1>
                </div> */}
            </div>

        </>
    )
}

export default SignatureVerification