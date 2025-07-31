// File: src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ExpertListPage from './pages/ExpertListPage';
import ExpertProfilePage from './pages/ExpertProfilePage';
import ScrollToTop from './ScrollToTop';

export default function App() {
    return (
        <BrowserRouter>
         <ScrollToTop />
            <div className="bg-white font-sans flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/experts/:category" element={<ExpertListPage />} />
                        <Route path="/profile/:id" element={<ExpertProfilePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}