import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/Landing/HeroSection'
import MoreInfo from '../components/Landing/MoreInfo'


const LandingPage = () => {
  return (
    <div className='mb-10'
    // style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}
    >
        <Navbar/>
        <hr />
        <HeroSection/>
        <MoreInfo/>
    </div>
  )
}

export default LandingPage