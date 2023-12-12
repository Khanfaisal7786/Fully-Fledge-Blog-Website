import React from 'react';
import Imglogo from '../assets/Imglogo.png';

function Logo({ width }) {
  const logoStyle = {
    width: width,
    backgroundColor: 'transparent',
  };

  return (
    <div style={logoStyle} className='flex items-center'>
      <img src={Imglogo} alt='Logo' className='w-full h-full object-contain' />
    </div>
  );
}

export default Logo;
