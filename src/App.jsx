// File: src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import JoinUsPage from './pages/JoinUsPage'; 
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
import ContactForm from './components/ContactForm';

function AppContent() {
    const location = useLocation();

    return (
        <div className="bg-white font-sans flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/experts/:category" element={<ExpertListPage />} />
                    <Route path="/profile/:id" element={<ExpertProfilePage />} />
                    <Route path="/contact" element={<ContactForm />} />
                </Routes>
            </main>

            {/* Show JoinUsPage only on the homepage */}
            {location.pathname === '/' && <JoinUsPage />}

            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <AppContent />
        </BrowserRouter>
    );
}
