import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import addImage from '../images/add.svg'
import QuickTip from '../components/SignatureVerification/QuickTip';
import axios from 'axios'

const SignatureVerification = () => {
    const [selectDocument, setSelectDocument] = useState(false)
    const [genuineImage, setGenuineImage] = useState()
    const [documentImage, setDocumentImage] = useState()
    const [verificationImages, setVerificationImages] = useState()
    const [showVerificationImage, setShowVerificationImage] = useState(false)
    const [showGenuineImage, setShowGenuineImage] = useState(false)
    // const [fetchDocumentSignature, setFetchDocumentSignatures] = useState(false)
    const [genuine, setGenuine] = useState()
    const [verification, setVerification] = useState()
    const [results, setResults] = useState(null)
    const [loading,setLoading] = useState(false)

    const verifyUsingDocument = async () => {
        const formData = new FormData();
        formData.append('genuine', genuineImage);
        formData.append('verificationImage', documentImage);
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:3001/verify-document', formData);
            console.log(response.data);
            setResults(response.data);
        } catch (error) {
            console.error('Error while submitting document:', error);
        }
        setLoading(false)
    }

    // const handleDocumentSubmit = async () => {
    //     const formData = new FormData();
    //     formData.append('document', documentImage); // assuming 'image' is the field name expected by the server
    //     try {
    //         const response = await axios.post('http://localhost:3001/extract-signature', formData);
    //         console.log(response.data);
    //         setShowVerificationImage(true);
    //     } catch (error) {
    //         console.error('Error while submitting document:', error);
    //     }
    //     // setDocumentLoading(false);
    //     setFetchDocumentSignatures(true)
    // }

    const verifyUsingSignature = async () => {
        const formData = new FormData();
        formData.append('genuine', genuineImage);
        formData.append('verificationImage', verificationImages);
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/verify-signature', formData);
            console.log(response.data);
            setResults(response.data);
        } catch (error) {
            console.error('Error while submitting document:', error);
        }
        setLoading(false);
    }

    const handleVerify = () => {
        if (selectDocument) {
            console.log("Verify using document")
            verifyUsingDocument()
        }
        else {
            console.log("Verify using signature")
            verifyUsingSignature()
        }
    }
    // try {
    //     const formData = new FormData();
    //     formData.append('genuine', genuineImage);

    //     for (let i = 0; i < verificationImages.length; i++) {
    //         formData.append('verificationImage', verificationImages[i]);
    //     }

    //     const responses = await Promise.all(verificationImages.map(async (verificationImage, index) => {
    //         try {
    //             return await axios.post('http://localhost:3001/verify-signature', formData);
    //         } catch (error) {
    //             console.error('Error while submitting document:', error);
    //             return { error: error.message };
    //         }
    //     }));

    //     console.log(responses.map(response => response.data));
    // } catch (error) {
    //     console.error('Error while submitting documents:', error);
    // }

    const handleGenuneUpload = async (e) => {
        const reader = new FileReader();
        const file = e.target.files[0]
        setGenuineImage(file)
        reader.onloadend = () => {
            setGenuine(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
        setShowGenuineImage(true)
    }

    const handleDocumentUpload = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0]
        setDocumentImage(e.target.files[0])
        reader.onloadend = () => {
            setVerification(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
        setShowVerificationImage(true);
        setSelectDocument(true)
        // handleDocumentSubmit();
    }

    const handleUploadVerify = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0]
        setVerificationImages(e.target.files[0]);
        reader.onloadend = () => {
            setVerification(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
        setShowVerificationImage(true);
        setSelectDocument(false)
    };

    useEffect(() => {

    }, [results,loading]);

    return (
        <>
            <Navbar />
            <hr />
            <div className='bg-gray-50 min-h-[90vh] flex justify-center items-center pt-5 md:pt-0 flex-col md:flex-row'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:w-[70%] lg:ml-20'>
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='text-2xl mb-14 text-center'>Genuine signature image</h1>
                        <label htmlFor="genuineSignature" className='flex justify-center items-center flex-col bg-white h-[15rem] w-[15rem] border rounded-lg hover:shadow-md hover:border-2 hover:shadow-blue-500 hover:border-blue-500 hover:cursor-pointer'>
                            {showGenuineImage ? <img src={genuine} className='cover'></img>
                                :
                                <>
                                    <img src={addImage} alt="" />
                                    <span className='mt-5 text-slate-500 text-sm'>Click Here to Upload Signature</span>
                                    <input type="file" id="genuineSignature" accept="image/*" onChange={handleGenuneUpload} hidden single={String(true)} />
                                </>
                            }
                        </label>
                        <div>
                            <label htmlFor="genuineSignature">
                                <div className='bg-blue-500 rounded-3xl w-[15rem] h-10 flex items-center justify-center text-white mt-5 mb-[6.2rem] hover:bg-white hover:border-blue-500 hover:text-black hover:border-2' onClick={handleDocumentUpload}>Upload New Signature</div>
                                <input type="file" id="genuineSignature" accept="image/*" onChange={handleGenuneUpload} hidden />
                            </label>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='text-2xl mb-14 text-center'>Signature image to be verified</h1>
                        {/* <input type="file" onChange={(e) => { setGenuineImage(e.target.files[0]) }} hidden /> */}
                        <label htmlFor="verificationSignature" className='flex justify-center items-center flex-col bg-white h-[15rem] w-[15rem] border rounded-lg hover:shadow-md hover:border-2 hover:shadow-blue-500 hover:border-blue-500 hover:cursor-pointer'>
                            {showVerificationImage ? <img src={verification} className='cover'></img>
                                :
                                <>
                                    <img src={addImage} alt="" />
                                    <span className='mt-5 text-slate-500 text-sm'>Click Here to Upload Signature</span>
                                    <input type="file" id="verificationSignature" accept="image/*" onChange={handleUploadVerify} hidden />
                                </>
                            }
                        </label>

                        <div>
                            <label htmlFor="verificationSignature">
                                <div className='bg-blue-500 rounded-3xl w-[15rem] h-10 flex items-center justify-center text-white my-5 hover:bg-white hover:border-blue-500 hover:text-black hover:border-2'>Upload New Signature</div>
                                <input type="file" id="verificationSignature" accept="image/*" onChange={(e) => {
                                    handleUploadVerify(e)
                                }
                                } hidden />

                            </label>
                            <hr />
                            <label htmlFor="documentImage">
                                <div className='bg-blue-500 rounded-3xl w-[15rem] h-10 flex items-center justify-center text-white my-5 hover:bg-white hover:border-blue-500 hover:text-black hover:border-2'
                                //  onClick={(e) => { setDocumentImage(e.target.files[0]) }}
                                >Upload New Document</div>
                                <input type="file" id="documentImage" accept="image/*" onChange={handleDocumentUpload} hidden />
                            </label>
                        </div>
                    </div>
                    <div className=' md:col-span-2 flex justify-center items-center mt-10'>
                        <div className='w-[20rem] bg-green-500 text-white h-10 rounded-full flex justify-center items-center text-xl hover:bg-white hover:text-black hover:border-2 hover:border-green-500 hover:cursor-pointer'
                            onClick={handleVerify}>
                            Verify
                        </div>
                    </div>
                </div>
                <div className='bg-white md:min-h-[70vh] w-[25rem] p-5 m-10 md:m-10 rounded-xl' >
                    {results == null ?
                        <QuickTip />
                        :
                        <div>
                            {loading==true?
                            <div className='flex justify-center items-center h-full mt-32'>
                                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
                            </div>
                            :
                            <>
                            <h1 className='text-3xl font-bold mt-14 text-center'>Results:</h1>
                            {/* <h2 className='text-2xl font-bold mt-14 text-center'>The provided signature:</h2> */}
                            <h1 className={`text-3xl font-bold mt-14 text-center ${results == "Match" ? "text-green-500" : 'text-red-500'}`}>{results}</h1>
                            </>}
                        </div>
                    }

                </div>
            </div>
            {/* <div className='w-full'>
                    <h1 className='text-3xl font-bold mt-14 text-center'>Results</h1>
                </div>  */}

        </>
    )
}

export default SignatureVerification