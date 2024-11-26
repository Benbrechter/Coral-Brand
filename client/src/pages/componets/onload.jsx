import Logo from '../pictures/logo.png'
import React, { useState, useEffect } from 'react';

import 'animate.css';

function OnLoad(){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate page loading (you can adjust this based on your specific loading needs)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 seconds loading time
  
      // Cleanup the timer
      return () => clearTimeout(timer);
    }, []);
  
    if (!isLoading) return null;
  
    return (
      <div className='onload-background '>
        <img src= {Logo} alt="" className='onload-img animate__animated animate__backInDown' />
      </div>
    );
  };

export default OnLoad