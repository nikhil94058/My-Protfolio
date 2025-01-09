"use client";
import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline"; // Ensure this is installed
import HomePage from "@/Pages/HomePage";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <main
          className="flex items-center justify-center h-screen text-blue-500 text-xl bg-gray-900 text-white"
          style={{ cursor: "wait" }}
        >
          <Spline scene="https://prod.spline.design/shp4hiI46VcWUg4O/scene.splinecode" />
        </main>
      </>
    );
  } else {
    return <HomePage />;
  }
}
