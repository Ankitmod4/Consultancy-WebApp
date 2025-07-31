// File: src/pages/ExpertProfilePage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // AnimatePresence bhi import karein
import { allExperts } from '../data/experts';
import { StarIcon, ArrowLeft, MessageCircle, Video } from '../components/icons';

const ExpertProfilePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const expert = allExperts.find(e => e.id === parseInt(id)); 
    console.log(expert);
     let about = expert.bio;
      let qualifications = expert.qualifications.join(', ');
    let skills = expert.skills.join(', ');
   
    let reviews = expert.reviews.map(review => `${review.name}: ${review.comment}`).join(' | ');
    
    const [activeTab, setActiveTab] = useState('about');
    if (!expert) {
        return <div className="text-center py-40">Expert not found!</div>;
    }
    
    // Card ke sections ko ek-ek karke animate karne ke liye variants
    const cardContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };
    
    const cardItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const TabButton = ({ tabName, children }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`relative whitespace-nowrap px-1 py-3 font-semibold transition-colors duration-300 ${activeTab === tabName ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'}`}
        >
            {children}
            {activeTab === tabName && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="underline" // Yeh magic hai!
                />
            )}
        </button>
    );

    return (
        <section id="expert-profile" className="bg-gray-100 min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.button 
                  onClick={() => navigate(-1)} 
                  className="flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:underline"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to List
                </motion.button>

                {/* --- Profile Card --- */}
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                  variants={cardContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                        <motion.div className="flex-shrink-0" variants={cardItemVariants}>
                            <img src={expert.image} alt={expert.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-100 shadow-md" />
                        </motion.div>

                        <motion.div className="flex-grow text-center md:text-left" variants={cardItemVariants}>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{expert.name}</h1>
                            <p className="text-lg text-blue-600 font-semibold mt-1">{expert.specialty}</p>
                            {/* ... baaki ka info ... */}
                             <div className="flex flex-wrap items-center justify-center md:justify-start mt-3 gap-x-4 gap-y-1 text-gray-600">
                                <div className="flex items-center">
                                    <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                                    <span className="font-bold">{expert.rating}</span>
                                </div>
                                 <span className="hidden sm:inline">&bull;</span>
                                <span>{expert.experience} years experience</span>
                                 <span className="hidden sm:inline">&bull;</span>
                                <span>{expert.reviews.length} review(s)</span>
                            </div>
                             <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
                                {expert.languages.map(lang => (
                                    <span key={lang} className="bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">{lang}</span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div className="flex-shrink-0 flex flex-col items-center md:items-end w-full md:w-auto mt-6 md:mt-0" variants={cardItemVariants}>
                            <p className="text-3xl font-bold text-green-600">₹{expert.fee} <span className="text-base font-normal text-gray-500">/session</span></p>
                            <div className="flex gap-3 mt-4 w-full md:w-auto">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md">
                                    <MessageCircle className="w-5 h-5" /> Voice Call
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md">
                                    <Video className="w-5 h-5" /> Video Call
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>


                {/* --- Profile Content Tabs --- */}
                <div className="mt-8">
                    <div className="bg-white rounded-xl shadow-lg">
                        <div className="border-b border-gray-200">
                            <nav className="flex justify-around sm:justify-start sm:space-x-6 px-4 sm:px-6">
                                <TabButton tabName="about">About</TabButton>
                                <TabButton tabName="qualification">Qualification</TabButton>
                                <TabButton tabName="skills">Skills</TabButton>
                                <TabButton tabName="reviews">Reviews</TabButton>
                            </nav>
                        </div>
                        <div className="p-6 md:p-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                   
    {/* About Tab */}
    {activeTab === 'about' && (
        <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">About Me</h3>
            {expert.bio ? (
                <p className="text-gray-700 leading-relaxed">{expert.bio}</p>
            ) : (
                <p className="text-gray-500 italic">No bio available.</p>
            )}
        </div>
    )}

    {/* Qualification Tab */}
    {activeTab === 'qualification' && (
        <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Qualifications</h3>
            {expert.qualifications && expert.qualifications.length > 0 ? (
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {expert.qualifications.map((qual, i) => <li key={i}>{qual}</li>)}
                </ul>
            ) : (
                 <p className="text-gray-500 italic">No qualifications listed.</p>
            )}
        </div>
    )}

    {/* Skills Tab */}
    {activeTab === 'skills' && (
        <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800">Skills</h3>
            {expert.skills && expert.skills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                    {expert.skills.map((skill, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1.5 rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 italic">No skills listed.</p>
            )}
        </div>
    )}

    {/* Reviews Tab */}
    {activeTab === 'reviews' && (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Client Reviews</h3>
            {expert.reviews && expert.reviews.length > 0 ? (
                <div className="space-y-4">
                    {expert.reviews.map((review, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <p className="text-gray-600 italic">"{review.comment}"</p>
                            <p className="text-right font-semibold text-gray-800 mt-2">- {review.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 italic">No reviews yet.</p>
            )}
        </div>
    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertProfilePage;