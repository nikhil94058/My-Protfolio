import React from "react";

const Footer = () => {
  return (
    <footer className=" relative z-10 bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
