import React from 'react'
import landing1 from '../../images/landing1.png'
import landing2 from '../../images/signatureVerification.jpg'
const MoreInfo = () => {
    return (
        <div>
            <div className='text-5xl text-center font-bold'>Features</div>

            <div className='flex justify-center items-center'>
                <div className='w-[80%] py-10 rounded-3xl mt-3 shadow-xl'>
                    <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-5'>
                        <div className=' col-span-2 p-5 md:p-14'>
                            <h3 className='text-[#476661] text-3xl font-bold'>Signature Extraction</h3>
                            <p className='text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit quisquam nulla nam at consequatur quibusdam dicta labore fuga? Voluptatum velit repellendus ea quo eius inventore totam, laboriosam distinctio consequatur ratione, tempore ut?</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={landing1} alt="" className='h-[20rem] mx-5 rounded-full' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center mt-10'>
                <div className='w-[80%] py-10 rounded-3xl mt-3 shadow-xl'>
                    <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-5'>
                        <div className='flex justify-center items-center'>
                            <img src={landing2} alt="" className='h-[20rem] mx-5 rounded-xl' />
                        </div>
                        <div className=' col-span-2 p-5 md:p-14'>
                            <h3 className='text-[#476661] text-3xl font-bold'>Signature Verification</h3>
                            <p className='text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit quisquam nulla nam at consequatur quibusdam dicta labore fuga? Voluptatum velit repellendus ea quo eius inventore totam, laboriosam distinctio consequatur ratione, tempore ut?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MoreInfo