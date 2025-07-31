// File: src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from './icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <nav className="bg-white shadow-md fixed w-full z-30 top-0">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">ExpertConnect</Link>
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-blue-600" onClick={()=>scrollTo(0,0)}>Home</Link>
                    <a href="/#experts" className="text-gray-600 hover:text-blue-600">Find an Expert</a>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
                    <Link to="/signup" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Sign Up</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">{isOpen ? <X /> : <Menu />}</button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white">
                    <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 px-6 text-sm text-gray-600 hover:bg-gray-100">Home</Link>
                    <a href="/#experts" onClick={() => setIsOpen(false)} className="block py-2 px-6 text-sm text-gray-600 hover:bg-gray-100">Find an Expert</a>
                    <Link to="/login" onClick={() => setIsOpen(false)} className="block py-2 px-6 text-sm text-gray-600 hover:bg-gray-100">Login</Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)} className="block py-3 px-6 text-sm text-white bg-blue-600 hover:bg-blue-700">Sign Up</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;