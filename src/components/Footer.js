import React from 'react';
import WhiteLogo from '../assets/white-logo.png';

function Footer() {
  return (
    <div>
        <div className='card-footer'>
            <img src={WhiteLogo} alt="white-logo" />
            All rights reserved &copy;
        </div>
    </div>
  )
}

export default Footer