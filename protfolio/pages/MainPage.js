import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main
        className="flex items-center justify-center h-screen bg-gray-900 text-white"
        style={{ cursor: 'wait' }}
      >
        Welcome
      </main>
    );
  }

  return <HomePage />;
};

export default MainPage;
