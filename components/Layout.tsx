import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    
    <div className='min-h-screen flex flex-col dark:bg-neutral-900 '>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
