// File: src/components/Footer.js
import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl font-bold mb-2">ExpertConnect</p>
        <p className="mb-4">The Right Professional For Every Job.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
        </div>
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} ExpertConnect. All Rights Reserved.</p>
      </div>
    </footer>
);

export default Footer;