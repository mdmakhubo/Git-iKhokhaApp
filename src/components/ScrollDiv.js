import React from 'react';
import logo from '../assets/logo-1.png';

const ScrollDiv = () => {
  return (
    <div className='container'>
        <div className='logo-section'>
            <img src={logo} alt='section-logos' />
            <img src={logo} alt='section-logos' />   
            <img src={logo} alt='section-logos' />   
            <img src={logo} alt='section-logos' />   
            <img src={logo} alt='section-logos' />                        
        </div>                                       
    </div>
  )
}

export default ScrollDiv