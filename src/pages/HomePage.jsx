// File: src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Framer Motion import kiya
import { Calculator, Sparkles, Scale, Briefcase, Code, Heart } from '../components/icons';

const HomePage = () => {
    // Hero Section mein Text aur Image ke liye animation variants
    const heroTextVariants = {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };
    
    const heroImageVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
    };

    const Hero = () => (
        <section id="home" className="pt-24 bg-gray-50">
            <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
                <motion.div 
                  className="md:w-1/2 lg:w-3/5 mb-10 md:mb-0 text-center md:text-left"
                  variants={heroTextVariants}
                  initial="hidden"
                  animate="visible"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">Find the Right <span className="text-blue-600">Expert</span> For Your Needs</h1>
                    <p className="text-lg text-gray-600 mb-8">Connect with verified professionals - CAs, Astrologers, Lawyers, and more, all on one platform.</p>
                    <a href="#experts" className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg hover:bg-blue-700 transition duration-300">Browse Experts</a>
                </motion.div>
                <motion.div 
                  className="md:w-1/2 lg:w-2/5 flex justify-center"
                  variants={heroImageVariants}
                  initial="hidden"
                  animate="visible"
                >
                    <img src="https://imgs.search.brave.com/_UlFypqlo-Zswc1Ramwn2xu7-YTYOsRzWsYHz4nukdA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTEv/MjAyLzA0OC9zbWFs/bC9zdWNjZXNzZnVs/LXRlYW0tb2YtYnVz/aW5lc3MtZXhwZXJ0/cy1wb3NpbmctaW4t/YW4tb2ZmaWNlLXNw/YWNlLXBvc2l0aXZl/LWFuZC1jb25maWRl/bnQtcGhvdG8uanBn" alt="Successful team of business experts" width="500" height="333" className="rounded-lg shadow-xl w-full max-w-sm md:max-w-full h-auto object-cover" />
                </motion.div>
            </div>
        </section>
    );
    
    const OurMission = () => (
        <motion.section 
          id="mission" 
          className="bg-white py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2">
                    <img src="https://imgs.search.brave.com/xlT4tMB4zNUmNX2WJ_BrdYTfkaNcB-CnoHNCqGZP4Nk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vYXJ0dXJzei9h/cnR1cnN6MTgwNC9h/cnR1cnN6MTgwNDAx/MTgyLzk5MDg2MDk0/LXdvcmQtd3JpdGlu/Zy10ZXh0LW91ci1t/aXNzaW9uLWJ1c2lu/ZXNzLWNvbmNlcHQt/Zm9yLWdvYWwtbW90/aXZhdGlvbi10YXJn/ZXQtZ3Jvd3RoLXBs/YW5uaW5nLmpwZz92/ZXI9Ng" alt="Our Mission" width="500" height="334" className="rounded-lg shadow-xl w-full h-auto" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                        ExpertConnect's mission is to connect people with the best and most trusted professionals for their needs. We believe in transparency, quality, and convenience, so you always get the best service and can achieve your goals easily.
                    </p>
                     <div className="flex justify-center md:justify-start space-x-8">
                          <div>
                              <p className="text-3xl font-bold text-blue-600">1,000+</p>
                              <p className="text-gray-500">Verified Experts</p>
                          </div>
                          <div>
                              <p className="text-3xl font-bold text-blue-600">50,000+</p>
                              <p className="text-gray-500">Consultations Done</p>
                          </div>
                     </div>
                </div>
            </div>
        </motion.section>
    );

    // ExpertCard ko bhi motion component banaya
    const ExpertCard = ({ icon, title, description, custom }) => (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
                })
            }}
            custom={custom}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
            <Link to={`/experts/${encodeURIComponent(title)}`} className="block bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center h-full cursor-pointer">
                <div className="text-blue-600 mb-4 inline-block">{icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </Link>
        </motion.div>
    );
    
    const ExpertCategories = () => {
        const categories = [
            { icon: <Calculator className="w-12 h-12" />, title: "Accountants & CAs", description: "Find experts for tax filing, financial planning, and business accounting." },
            { icon: <Sparkles className="w-12 h-12" />, title: "Astrologers", description: "Get guidance on your future, career, and relationships." },
            { icon: <Scale className="w-12 h-12" />, title: "Legal Advisors", description: "Connect with professionals for legal documents, agreements, and advice." },
            { icon: <Briefcase className="w-12 h-12" />, title: "Business Consultants", description: "Get strategy and growth advice to scale your business." },
            { icon: <Code className="w-12 h-12" />, title: "Software & IT Consultants", description: "Connect with developers, cloud experts, and IT professionals for your technical projects." },
            { icon: <Heart className="w-12 h-12" />, title: "Health & Wellness", description: "Stay healthy with advice from nutritionists, yoga teachers, and fitness coaches." }
        ];

        return (
            <motion.section 
                id="experts" 
                className="bg-gray-50 py-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">Expert Categories</h2>
                        <p className="text-lg text-gray-600 mt-4">We connect you with the best professionals in every field.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <ExpertCard key={index} {...category} custom={index} />
                        ))}
                    </div>
                </div>
            </motion.section>
        );
    };

    return (
        <>
            <Hero />
            <OurMission />
            <ExpertCategories />
        </>
    );
};

export default HomePage;