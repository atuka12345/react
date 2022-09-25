import React, { Children } from 'react';
import Header from './header/header';
import Navbar from './navbar/navbar';

const index = ( {children} ) => {
  return (
    <div>
        <Header />
        <Navbar/>
        {children}
    </div>
  )
}

export default index