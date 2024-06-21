import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col bg-neutral-900'>
      {children}
    </div>
  );
};

export default Layout;
