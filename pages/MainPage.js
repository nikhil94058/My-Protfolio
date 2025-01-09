import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import Spline from '@splinetool/react-spline'; // Ensure this is installed

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 10000); // Adjust the timeout duration as needed

      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return (
      <main
        className="flex items-center justify-center h-screen text-blue-500 text-xl bg-gray-900 text-white"
        style={{ cursor: 'wait' }}
      >
        <Spline
          scene="https://prod.spline.design/shp4hiI46VcWUg4O/scene.splinecode"
        />
      </main>
    );
  }

  return <HomePage />;
};

export default MainPage;
