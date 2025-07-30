import React, { useState } from 'react';
// react-router-dom ko install karna zaroori hai: npm install react-router-dom
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// --- Icon Imports (Inline SVG) ---
// (Icons yahan collapse kiye gaye hain)
const Briefcase = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>);
const Menu = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>);
const X = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>);
const Calculator = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="12" y1="10" x2="12" y2="18"></line><line x1="8" y1="14" x2="16" y2="14"></line></svg>);
const Sparkles = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.93 2.55a2 2 0 0 0-1.86 0L6.53 3.47a2 2 0 0 1-2.6 0L2.5 2.55a2 2 0 0 0-1.86 0L.5 2.67a2 2 0 0 0 0 3.46l.14.07a2 2 0 0 1 0 2.6l-.14.07a2 2 0 0 0 0 3.46l.14.07a2 2 0 0 0 1.86 0l1.44-.92a2 2 0 0 1 2.6 0l1.44.92a2 2 0 0 0 1.86 0l.14-.07a2 2 0 0 0 0-3.46l-.14-.07a2 2 0 0 1 0-2.6l.14-.07a2 2 0 0 0 0-3.46Z"/><path d="M14.07 15.45a2 2 0 0 0 1.86 0l1.44-.92a2 2 0 0 1 2.6 0l1.44.92a2 2 0 0 0 1.86 0l.14-.07a2 2 0 0 0 0-3.46l-.14-.07a2 2 0 0 1 0-2.6l.14-.07a2 2 0 0 0 0-3.46l-.14-.07a2 2 0 0 0-1.86 0l-1.44.92a2 2 0 0 1-2.6 0l-1.44-.92a2 2 0 0 0-1.86 0l-.14.07a2 2 0 0 0 0 3.46l.14.07a2 2 0 0 1 0 2.6l-.14.07a2 2 0 0 0 0 3.46Z"/></svg>);
const Scale = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg>);
const Star = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>);
const ArrowLeft = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>);
const MessageCircle = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>);
const Video = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>);
const Code = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>);
const Heart = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>);


// --- Mock Data for Experts ---
const allExperts = [
    { id: 1, name: "Suresh Gupta", category: "Accountants & CAs", specialty: "Tax Consultant", experience: 12, rating: 4.8, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=SG", bio: "Suresh Gupta ek anubhavi tax consultant hain jo startups aur small businesses ko unke tax planning mein madad karte hain." },
    { id: 2, name: "Meena Verma", category: "Accountants & CAs", specialty: "Corporate Finance", experience: 15, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=MV", bio: "Corporate finance mein 15 saal ke anubhav ke saath, Meena aapke business ke financial structure ko optimize karti hain." },
    { id: 3, name: "Rajesh Kumar", category: "Accountants & CAs", specialty: "GST Expert", experience: 8, rating: 4.7, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=RK", bio: "Rajesh Kumar GST registration aur filing ke maahir hain, aur aapke business ko compliant rakhne mein sahayata karte hain." },
    { id: 4, name: "Pandit Ravi Joshi", category: "Astrologers", specialty: "Vedic Astrology", experience: 20, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=RJ", bio: "Vedic astrology ke gyata, Pandit Ravi Joshi aapko career, vivah, aur jeevan ke anya mahatvapurna faislon par maargdarshan dete hain." },
    { id: 5, name: "Anjali Sharma", category: "Astrologers", specialty: "Tarot Card Reader", experience: 10, rating: 4.8, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=AS", bio: "Anjali Sharma ek prassidh Tarot Card reader hain jo aapko vartaman aur bhavishya ke prati gehraai se jaankari deti hain." },
    { id: 6, name: "Advocate Alok Singh", category: "Legal Advisors", specialty: "Corporate Law", experience: 18, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=AS", bio: "Advocate Alok Singh corporate law ke vishay mein ek jaane maane naam hain, jo legal contracts aur compliance mein expert hain." },
    { id: 7, name: "Priya Desai", category: "Legal Advisors", specialty: "Family Law", experience: 12, rating: 4.7, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=PD", bio: "Priya Desai parivarik mamlon ki vakeel hain aur is shetra mein unka anubhav aapke liye sahayak ho sakta hai." },
    { id: 8, name: "Amit Khanna", category: "Business Consultants", specialty: "Startup Growth", experience: 14, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=AK", bio: "Amit Khanna startups ko unki growth strategy banane mein madad karte hain, marketing se lekar funding tak." },
    { id: 9, name: "Sunita Menon", category: "Business Consultants", specialty: "Marketing Strategy", experience: 16, rating: 4.8, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=SM", bio: "Sunita Menon ek marketing guru hain jo aapke brand ko market mein sthapit karne ke liye innovative ideas deti hain." },
    { id: 10, name: "Vikram Rathore", category: "Business Consultants", specialty: "Operations Management", experience: 19, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=VR", bio: "Vikram Rathore business operations ko streamline karne mein maahir hain, jisse aapki company ki efficiency badhti hai." },
    { id: 11, name: "Arjun Mehta", category: "Software & IT Consultants", specialty: "Cloud Solutions Architect", experience: 11, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=AM", bio: "Arjun Mehta AWS aur Azure cloud platforms ke expert hain aur aapke business ko cloud par migrate karne mein madad karte hain." },
    { id: 12, name: "Sneha Reddy", category: "Software & IT Consultants", specialty: "Cybersecurity Expert", experience: 9, rating: 4.8, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=SR", bio: "Sneha Reddy aapke digital assets ko online khatron se surakshit rakhti hain." },
    { id: 13, name: "Dr. Riya Sharma", category: "Health & Wellness", specialty: "Nutritionist", experience: 10, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=RS", bio: "Dr. Riya Sharma aapko balanced diet aur healthy lifestyle ke liye personal guidance deti hain." },
    { id: 14, name: "Yogacharya Sameer", category: "Health & Wellness", specialty: "Yoga & Meditation", experience: 15, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=YS", bio: "Yogacharya Sameer tanav kam karne aur mansik shanti ke liye yoga aur dhyan sikhate hain." },
];

// ====================================================================
// --- File: components/Navbar.js ---
// ====================================================================
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white shadow-md fixed w-full z-20 top-0">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">ExpertConnect</Link>
                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
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

// ====================================================================
// --- File: components/Footer.js ---
// ====================================================================
const Footer = () => (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl font-bold mb-2">ExpertConnect</p>
        <p className="mb-4">Aapke Har Kaam Ke Liye Sahi Professional.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
        </div>
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} ExpertConnect. All Rights Reserved.</p>
      </div>
    </footer>
);

// ====================================================================
// --- File: pages/HomePage.js ---
// ====================================================================
const HomePage = () => {
    const Hero = () => (
        <section id="home" className="pt-24 bg-gray-50">
            <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 lg:w-3/5 mb-10 md:mb-0 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">Apni Zaroorat Ke Liye Sahi <span className="text-blue-600">Expert</span> Khojein</h1>
                    <p className="text-lg text-gray-600 mb-8">Verified professionals se judein - CA, Astrologers, Lawyers, aur bhi bahut kuch, sab ek hi platform par.</p>
                    <a href="#experts" className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg hover:bg-blue-700 transition duration-300">Experts Dekhein</a>
                </div>
                <div className="md:w-1/2 lg:w-2/5 flex justify-center">
                    <img src="https://imgs.search.brave.com/_UlFypqlo-Zswc1Ramwn2xu7-YTYOsRzWsYHz4nukdA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTEv/MjAyLzA0OC9zbWFs/bC9zdWNjZXNzZnVs/LXRlYW0tb2YtYnVz/aW5lc3MtZXhwZXJ0/cy1wb3NpbmctaW4t/YW4tb2ZmaWNlLXNw/YWNlLXBvc2l0aXZl/LWFuZC1jb25maWRl/bnQtcGhvdG8uanBn" alt="Successful team of business experts" className="rounded-lg shadow-xl w-full max-w-sm md:max-w-full h-auto object-cover" />
                </div>
            </div>
        </section>
    );
    
    const OurMission = () => (
        <section id="mission" className="bg-white py-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2">
                    <img src="https://imgs.search.brave.com/xlT4tMB4zNUmNX2WJ_BrdYTfkaNcB-CnoHNCqGZP4Nk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vYXJ0dXJzei9h/cnR1cnN6MTgwNC9h/cnR1cnN6MTgwNDAx/MTgyLzk5MDg2MDk0/LXdvcmQtd3JpdGlu/Zy10ZXh0LW91ci1t/aXNzaW9uLWJ1c2lu/ZXNzLWNvbmNlcHQt/Zm9yLWdvYWwtbW90/aXZhdGlvbi10YXJn/ZXQtZ3Jvd3RoLXBs/YW5uaW5nLmpwZz92/ZXI9Ng" alt="Our Mission" className="rounded-lg shadow-xl w-full h-auto" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Hamara Mission</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                        ExpertConnect ka mission logon ko unke kaam ke liye sabse behtar aur trusted professionals se jodna hai. Hum transparency, quality, aur suvidha par vishwas rakhte hain, taki aapko hamesha best service mile aur aap apne goals aasani se achieve kar sakein.
                    </p>
                     <div className="flex justify-center md:justify-start space-x-8">
                        <div>
                            <p className="text-3xl font-bold text-blue-600">1000+</p>
                            <p className="text-gray-500">Verified Experts</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-blue-600">50,000+</p>
                            <p className="text-gray-500">Consultations Done</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const ExpertCard = ({ icon, title, description }) => (
        <Link to={`/experts/${encodeURIComponent(title)}`} className="block bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center h-full cursor-pointer">
            <div className="text-blue-600 mb-4 inline-block">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </Link>
    );
    
    const ExpertCategories = () => {
        const categories = [
            { icon: <Calculator className="w-12 h-12" />, title: "Accountants & CAs", description: "Tax filing, financial planning, aur business accounting ke liye experts khojein." },
            { icon: <Sparkles className="w-12 h-12" />, title: "Astrologers", description: "Apne future, career, aur relationships ke baare mein guidance prapt karein." },
            { icon: <Scale className="w-12 h-12" />, title: "Legal Advisors", description: "Legal documents, agreements, aur kanooni salah ke liye professionals se judein." },
            { icon: <Briefcase className="w-12 h-12" />, title: "Business Consultants", description: "Apne business ko badhane ke liye strategy aur growth advice lein." },
            { icon: <Code className="w-12 h-12" />, title: "Software & IT Consultants", description: "Apne technical projects ke liye developers, cloud experts, aur IT professionals se judein." },
            { icon: <Heart className="w-12 h-12" />, title: "Health & Wellness", description: "Nutritionists, yoga teachers, aur fitness coaches se salah lekar swasth rahein." }
        ];
        return (
            <section id="experts" className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">Expert Categories</h2>
                        <p className="text-lg text-gray-600 mt-4">Hum aapko har field ke best professionals se jodte hain.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => <ExpertCard key={index} {...category} />)}
                    </div>
                </div>
            </section>
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

// ====================================================================
// --- File: pages/LoginPage.js ---
// ====================================================================
const LoginPage = () => (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center pt-24 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to ExpertConnect</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="aapka@email.com" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input type="password" id="password" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="********" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700 transition duration-300">Login</button>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                </p>
            </form>
        </div>
    </div>
);

// ====================================================================
// --- File: pages/SignupPage.js ---
// ====================================================================
const SignupPage = () => (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center pt-24 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Aapka Naam" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signup-email">Email Address</label>
                    <input type="email" id="signup-email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="aapka@email.com" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signup-password">Password</label>
                    <input type="password" id="signup-password" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="********" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700 transition duration-300">Sign Up</button>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </form>
        </div>
    </div>
);

// ====================================================================
// --- File: pages/ExpertListPage.js ---
// ====================================================================
const ExpertListPage = () => {
    const { category } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const decodedCategory = decodeURIComponent(category);

    const expertsInCategory = allExperts.filter(expert => expert.category === decodedCategory);
    
    const filteredExperts = expertsInCategory.filter(expert =>
        expert.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const ExpertProfileCard = ({ expert }) => (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 w-full">
            <img src={expert.image} alt={expert.name} className="w-24 h-24 rounded-full object-cover border-4 border-gray-200" />
            <div className="text-center sm:text-left flex-grow">
                <h3 className="text-2xl font-bold text-gray-800">{expert.name}</h3>
                <p className="text-blue-600 font-semibold">{expert.specialty}</p>
                <p className="text-gray-500">{expert.experience} years of experience</p>
                <div className="flex items-center justify-center sm:justify-start mt-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-600 font-bold ml-1">{expert.rating}</span>
                </div>
            </div>
            <Link to={`/profile/${expert.id}`} className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 mt-4 sm:mt-0 whitespace-nowrap">View Profile</Link>
        </div>
    );

    return (
        <section id="expert-list" className="bg-gray-50 py-20 min-h-screen pt-28">
            <div className="container mx-auto px-6">
                <Link to="/" className="flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:underline">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Categories
                </Link>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Experts in {decodedCategory}</h2>
                    <div className="max-w-md mx-auto mt-6">
                        <input
                            type="text"
                            placeholder="Expert ka naam search karein..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="space-y-8 max-w-4xl mx-auto">
                    {filteredExperts.length > 0 ? (
                        filteredExperts.map((expert) => <ExpertProfileCard key={expert.id} expert={expert} />)
                    ) : (
                        <p className="text-center text-gray-600 text-lg">Is naam se koi expert nahi mila.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

// ====================================================================
// --- File: pages/ExpertProfilePage.js ---
// ====================================================================
const ExpertProfilePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const expert = allExperts.find(e => e.id === parseInt(id));

    if (!expert) {
        return <div className="text-center py-40">Expert not found!</div>;
    }

    return (
        <section id="expert-profile" className="bg-gray-50 py-20 min-h-screen pt-28">
            <div className="container mx-auto px-6">
                 <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:underline">
                    <ArrowLeft className="w-5 h-5" />
                    Back to List
                </button>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0 text-center">
                            <img src={expert.image} alt={expert.name} className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 mx-auto" />
                            <div className="flex items-center justify-center mt-4">
                                <Star className="w-6 h-6 text-yellow-400" />
                                <span className="text-gray-700 font-bold ml-2 text-xl">{expert.rating}</span>
                            </div>
                             <p className="text-gray-500 mt-1">{expert.experience} years experience</p>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h2 className="text-4xl font-bold text-gray-800">{expert.name}</h2>
                            <p className="text-xl text-blue-600 font-semibold mt-1">{expert.specialty}</p>
                            <p className="text-gray-600 mt-4 text-lg">{expert.bio}</p>
                            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                                <button className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition duration-300 text-lg">
                                    <MessageCircle className="w-6 h-6" />
                                    Start Chat
                                </button>
                                 <button className="flex items-center justify-center gap-2 bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition duration-300 text-lg">
                                    <Video className="w-6 h-6" />
                                    Start Video Call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ====================================================================
// --- File: App.js ---
// ====================================================================
export default function App() {
    return (
        <BrowserRouter>
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
