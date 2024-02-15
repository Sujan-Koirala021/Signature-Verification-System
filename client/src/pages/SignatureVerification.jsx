import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import addImage from '../images/add.svg'
import QuickTip from '../components/SignatureVerification/QuickTip';
import axios from 'axios'

const SignatureVerification = () => {
    const [selectDocument, setSelectDocument] = useState(false)
    const [genuineImage, setGenuineImage] = useState()
    const [documentImage, setDocumentImage] = useState()
    const [verificationImages, setVerificationImages] = useState([])

    const handleDocumentSubmit = async () => {
        const formData = new FormData();
        formData.append('document', genuineImage); // assuming 'image' is the field name expected by the server
        // formData.append('title', "Document signature")

        try {
            const response = await axios.post('http://localhost:3001/extract-signature', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error while submitting document:', error);
        }
    }

    const handleVerifySignature = async () => {
        const formData = new FormData();
        formData.append('genune', genuineImage);
        formData.append('verificationImage', verificationImages)
        // formData.append('title', "Document signature")

        try {
            const response = await axios.post('http://localhost:3001//verify-signature', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error while submitting document:', error);
        }
    }

    const handleGenuneUpload = (e) => {
        setGenuineImage(e.target.files[0])
    }

    const handleDocumentUpload = (e) => {
        setDocumentImage(e.target.files[0])
    }

    const handleUploadVerify = (e) => {
        setVerificationImages([...verificationImages, e.target.files[0]]);
    };
    return (
        <>
            <Navbar />
            <hr />
            {/* <input type="file"  onChange={(e)=>{setGenuineImage(e.target.files[0])}}/> */}
            {/* <button onClick={handleDocumentSubmit}>Submit</button> */}
            <div className='bg-gray-50 min-h-[90vh] flex justify-center items-center pt-5 md:pt-0 flex-col md:flex-row'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:w-[70%] lg:ml-20'>
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='text-2xl mb-14 text-center'>Genuine signature image</h1>
                        <label htmlFor="genuineSignature" className='flex justify-center items-center flex-col bg-white h-[15rem] w-[15rem] border rounded-lg hover:shadow-md hover:border-2 hover:shadow-blue-500 hover:border-blue-500 hover:cursor-pointer'>
                            <img src={addImage} alt="" />
                            <span className='mt-5 text-slate-500 text-sm'>Click Here to Upload Signature</span>
                            <input type="file" id="genuineSignature" onChange={handleGenuneUpload} hidden single />
                        </label>
                        <div>
                            <label htmlFor="genuineSignature">
                                <div className='bg-blue-500 rounded-3xl w-[15rem] h-10 flex items-center justify-center text-white mt-5 mb-[6.2rem] hover:bg-white hover:border-blue-500 hover:text-black hover:border-2' onClick={handleDocumentSubmit}>Upload New Signature</div>
                                <input type="file" id="genuineSignature" onChange={handleUploadVerify} hidden />
                            </label>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='text-2xl mb-14 text-center'>Signature image to be verified</h1>
                        <input type="file" onChange={(e) => { setGenuineImage(e.target.files[0]) }} hidden />
                        <label htmlFor="verificationSignature" className='flex justify-center items-center flex-col bg-white h-[15rem] w-[15rem] border rounded-lg hover:shadow-md hover:border-2 hover:shadow-blue-500 hover:border-blue-500 hover:cursor-pointer'>
                            <img src={addImage} alt="" />
                            <span className='mt-5 text-slate-500 text-sm'>Click Here to Upload Signature</span>
                            <input type="file" id="verificationSignature" onChange={(e) => { setGenuineImage(e.target.files[0]) }} hidden />
                        </label>

                        <div>
                            <label htmlFor="verificationSignature">
                                <div className='bg-blue-500 rounded-3xl w-[15rem] h-10 flex items-center justify-center text-white my-5 hover:bg-white hover:border-blue-500 hover:text-black hover:border-2'>Upload New Signature</div>
                                <input type="file" id="verificationSignature" onChange={handleUploadVerify} hidden />
                            </label>
                            <hr />
                            <label htmlFor="documentImage">
                                <div className='bg-blue-500 rounded-3xl w-[15rem] h-10 flex items-center justify-center text-white my-5 hover:bg-white hover:border-blue-500 hover:text-black hover:border-2' onClick={(e) => { setDocumentImage(e.target.files[0]) }}>Upload New Document</div>
                                <input type="file" id="documentImage" onChange={handleDocumentUpload} hidden />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='bg-white md:min-h-[70vh] w-[25rem] p-5 m-10 md:m-10 rounded-xl' >

                    <QuickTip />
                </div>
                {/* <div>
                    <h1 className='text-3xl font-bold mt-14'>Results</h1>
                </div> */}
            </div>

        </>
    )
}

export default SignatureVerification