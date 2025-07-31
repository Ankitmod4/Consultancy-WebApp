// File: src/pages/ExpertProfilePage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allExperts } from '../data/experts';
import { StarIcon, ArrowLeft, MessageCircle, Video } from '../components/icons';

const ExpertProfilePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const expert = allExperts.find(e => e.id === parseInt(id));
    const [activeTab, setActiveTab] = useState('about');

    if (!expert) {
        return <div className="text-center py-40">Expert not found!</div>;
    }

    const TabButton = ({ tabName, children }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`whitespace-nowrap px-4 md:px-6 py-3 font-semibold transition-colors duration-300 border-b-2 ${activeTab === tabName ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
        >
            {children}
        </button>
    );

    return (
        <section id="expert-profile" className="bg-gray-100 min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:underline">
                    <ArrowLeft className="w-5 h-5" />
                    Back to List
                </button>

                {/* --- Profile Card --- */}
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <img src={expert.image} alt={expert.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-100 shadow-md" />
                        </div>

                        {/* Profile Info */}
                        <div className="flex-grow text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{expert.name}</h1>
                            <p className="text-lg text-blue-600 font-semibold mt-1">{expert.specialty}</p>
                            
                            {/* Responsive Stats Section */}
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
                        </div>

                        {/* Action Area */}
                        <div className="flex-shrink-0 flex flex-col items-center md:items-end w-full md:w-auto mt-6 md:mt-0">
                            <p className="text-3xl font-bold text-green-600">₹{expert.fee} <span className="text-base font-normal text-gray-500">/session</span></p>
                            <div className="flex gap-3 mt-4 w-full md:w-auto">
                                <button className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
                                    <MessageCircle className="w-5 h-5" />
                                    Voice Call
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300">
                                    <Video className="w-5 h-5" />
                                    Video Call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --- Profile Content Tabs --- */}
                <div className="mt-8">
                    <div className="bg-white rounded-xl shadow-lg">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-2 sm:space-x-6 px-4 sm:px-6 overflow-x-auto">
                                <TabButton tabName="about">About</TabButton>
                                <TabButton tabName="qualification">Qualification</TabButton>
                                <TabButton tabName="skills">Skills</TabButton>
                                <TabButton tabName="reviews">Reviews</TabButton>
                            </nav>
                        </div>
                        <div className="p-6 md:p-8">
                            {activeTab === 'about' && (
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">About Me</h3>
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{expert.bio}</p>
                                </div>
                            )}

                            {activeTab === 'qualification' && (
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Qualifications</h3>
                                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                                        {expert.qualifications && expert.qualifications.map((qual, index) => (
                                            <li key={index} className="pl-2">{qual}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'skills' && (
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Skills</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {expert.skills.map(skill => (
                                            <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1.5 rounded-full">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeTab === 'reviews' && (
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Client Reviews</h3>
                                    <div className="space-y-6">
                                        {expert.reviews.map((review, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                                                <p className="text-gray-600 italic">"{review.comment}"</p>
                                                <p className="text-right font-semibold text-gray-800 mt-2">- {review.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertProfilePage;