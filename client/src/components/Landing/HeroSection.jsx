import React from 'react'

import background from '../../images/landing3.jpg'
const HeroSection = () => {
  return (
    <div className='flex justify-center items-center md:my-10'>
        <div className='w-full md:w-[80%] text-white grid grid-cols-1 md:grid-cols-2 h-[50rem] md:h-[40rem] md:rounded-3xl'
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='p-16 flex justify-center flex-col'
>
                <h1 className='text-5xl font-bold my-5'>Signature Verification System</h1>

                <p className='text-lg mt-5'>

                A signature verification system using Siamese neural networks for identity validation and YOLO for swift signature detection in documents, ensuring rapid and reliable authentication.
                    </p>
                    <div className='mt-5'>
                            {/* <button className='bg-transparent rounded-xl border-white border-2 w-24 h-8 text-white mt-5 text-sm hover:bg-white hover:text-black'>SIGN UP {'>'}</button> */}
                            <button className='bg-transparent rounded-xl border-white border-2 w-32 h-9 text-white mt-5 text-md hover:bg-white hover:text-black mx-3'>TRY IT {'>'}</button>
                        </div>
            </div>
            <div className='flex justify-center items-center'> 
                {/* <img src={landing1} alt="" className='h-[20rem] rounded-[50%] mx-5'/> */}
            </div>
        </div>
    </div>
  )
}

export default HeroSection