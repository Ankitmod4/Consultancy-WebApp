import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from './icons'; // Icon import kiya

const ProfessionalProfileForm = () => {
    // Form fields ke liye state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        experience: 0,
        qualifications: [],
        skills: [],
    });

    // Tags ke liye temporary state
    const [currentQualification, setCurrentQualification] = useState('');
    const [currentSkill, setCurrentSkill] = useState('');

    // Normal text/number inputs ke liye handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Enter press karke tag add karne ke liye handler
    const handleTagKeyDown = (field, value, setter) => (e) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            e.preventDefault(); // Form ko submit hone se roke
            if (!formData[field].includes(value.trim())) {
                setFormData(prev => ({
                    ...prev,
                    [field]: [...prev[field], value.trim()]
                }));
            }
            setter(''); // Input field ko khaali karein
        }
    };

    // Tag ko remove karne ke liye handler
    const removeTag = (field, tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter(tag => tag !== tagToRemove)
        }));
    };

    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Professional Profile Data:", formData);
        alert('Profile submitted successfully! Check the console for data.');
        // Yahan backend API call ka code aayega
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    className="bg-white p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Submit Your Professional Details</h2>
                    <p className="text-center text-gray-500 mb-8">Fill in your information to join our network of experts.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <textarea name="address" id="address" rows="3" value={formData.address} onChange={handleChange} className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        
                        <hr/>

                        {/* Professional Details */}
                        <div>
                            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Total Experience (in years)</label>
                            <input type="number" name="experience" id="experience" min="0" value={formData.experience} onChange={handleChange} required className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* Qualifications (Tag Input) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Education / Qualifications</label>
                            <div className="mt-1 flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md min-h-[42px]">
                                {formData.qualifications.map((qual, index) => (
                                    <span key={index} className="flex items-center bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-1 rounded-full">
                                        {qual}
                                        <button type="button" onClick={() => removeTag('qualifications', qual)} className="ml-2 text-gray-500 hover:text-gray-700">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                            <input type="text" value={currentQualification} onChange={(e) => setCurrentQualification(e.target.value)} onKeyDown={handleTagKeyDown('qualifications', currentQualification, setCurrentQualification)} placeholder="Type qualification and press Enter" className="mt-2 w-full p-2 border border-gray-300 rounded-md" />
                        </div>

                        {/* Skills (Tag Input) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Skills</label>
                             <div className="mt-1 flex flex-wrap gap-2 p-2 border border-gray-300 rounded-md min-h-[42px]">
                                {formData.skills.map((skill, index) => (
                                    <span key={index} className="flex items-center bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-1 rounded-full">
                                        {skill}
                                        <button type="button" onClick={() => removeTag('skills', skill)} className="ml-2 text-blue-500 hover:text-blue-700">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </span>
                                ))}
                            </div>
                            <input type="text" value={currentSkill} onChange={(e) => setCurrentSkill(e.target.value)} onKeyDown={handleTagKeyDown('skills', currentSkill, setCurrentSkill)} placeholder="Type skill and press Enter" className="mt-2 w-full p-2 border border-gray-300 rounded-md" />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Submit Profile
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ProfessionalProfileForm;