import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles } from '../components/icons'; // Icons for visual appeal

const JoinUsPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-2xl w-full space-y-8 text-center bg-white p-10 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div>
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <Briefcase className="h-12 w-12 text-blue-600" />
                        <h2 className="text-4xl font-bold text-gray-900">
                            Become a Consultant
                        </h2>
                    </div>
                    <p className="mt-4 text-lg text-gray-600">
                        Join our growing network of professional experts and connect with clients from all over India. Share your knowledge, build your online presence, and grow your practice with ExpertConnect.
                    </p>
                </div>
                
                <div className="mt-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/contact"
                            className="group relative w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <Sparkles className="mr-3 h-5 w-5 text-blue-300 group-hover:text-yellow-300 transition-colors" />
                            Apply Now
                        </Link>
                    </motion.div>
                </div>
                
                <div className="mt-6 text-sm text-gray-500">
                    <p>Have questions? Reach out to our support team anytime.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default JoinUsPage;