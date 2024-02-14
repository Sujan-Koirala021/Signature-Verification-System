import React from 'react'
import { HiLightBulb } from "react-icons/hi";

const QuickTip = () => {
    return (
        <div className='m-5'>
            <div className='flex items-center flex-row'>
                <div className=' px-3'><HiLightBulb className='text-yellow-400 text-5xl' /> </div>
                <div className='text-2xl font-bold'>Quick Tip</div>
            </div>
            <ul className='list-disc pl-5 mt-8'>
                <li className='mb-3'>Upload your original signature image to the "Genuine signature image" section, which will serve as a reference for verifying signatures.</li>
                <li className='mb-3'>Upload the signature to be verified in the "Signature image to be verified" section to determine its authenticity.</li>
                <li className='mb-3'>You can also upload a document containing the signature to be verified. Our model can extract signatures from documents as well.</li>
            </ul>
        </div>
    )
}

export default QuickTip