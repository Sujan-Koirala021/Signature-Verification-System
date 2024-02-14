import React from 'react'
import yoloImage from '../../images/yolo.png'
import tensorflowImage from '../../images/tensorflow.png'
import mernImage from '../../images/mern.png'
import kerasImage from '../../images/keras.png'

const Technology = () => {
    const technologyList = [{
        img: yoloImage,
        description: "YOLO algorithm uses a deep CNN to detect objects in the image."
    },
    {
        img: tensorflowImage,
        description: "Tensorflow is used to build model for siamese network."
    },
    {
        img: kerasImage,
        description: "Keras is a library that provides a Python interface for ANN."
    },
    {
        img: mernImage,
        description: "MERN stack is used for building interactive web app."
    },
]
    return (
        <div className='mx-10 my-20 md:m-20 flex justify-center flex-col items-center'>
            <h1 className='text-5xl font-bold text-center'>Technology</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-10 md:w-[60%] mt-14'>
                {technologyList.map((technology, index) => (
                    <div key={index} className="flex items-center justify-center flex-col">
                        <img src={technology.img} alt="" className='w-24 h-24' />
                        <div className="text-center mt-2 text-slate-600 px-2">{technology.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Technology