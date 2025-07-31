import React, { useState, useMemo } from 'react';
// react-router-dom ko install karna zaroori hai: npm install react-router-dom
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// --- Icon Imports (Inline SVG) ---
const Briefcase = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>);
const Menu = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>);
const X = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>);
const Calculator = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="12" y1="10" x2="12" y2="18"></line><line x1="8" y1="14" x2="16" y2="14"></line></svg>);
const Sparkles = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.93 2.55a2 2 0 0 0-1.86 0L6.53 3.47a2 2 0 0 1-2.6 0L2.5 2.55a2 2 0 0 0-1.86 0L.5 2.67a2 2 0 0 0 0 3.46l.14.07a2 2 0 0 1 0 2.6l-.14.07a2 2 0 0 0 0 3.46l.14.07a2 2 0 0 0 1.86 0l1.44-.92a2 2 0 0 1 2.6 0l1.44.92a2 2 0 0 0 1.86 0l.14-.07a2 2 0 0 0 0-3.46l-.14-.07a2 2 0 0 1 0-2.6l.14-.07a2 2 0 0 0 0-3.46Z"/><path d="M14.07 15.45a2 2 0 0 0 1.86 0l1.44-.92a2 2 0 0 1 2.6 0l1.44.92a2 2 0 0 0 1.86 0l.14-.07a2 2 0 0 0 0-3.46l-.14-.07a2 2 0 0 1 0-2.6l.14-.07a2 2 0 0 0 0-3.46l-.14-.07a2 2 0 0 0-1.86 0l-1.44.92a2 2 0 0 1-2.6 0l-1.44-.92a2 2 0 0 0-1.86 0l-.14.07a2 2 0 0 0 0 3.46l.14.07a2 2 0 0 1 0 2.6l-.14.07a2 2 0 0 0 0 3.46Z"/></svg>);
const Scale = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg>);
const StarIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>);
const ArrowLeft = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>);
const MessageCircle = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>);
const Video = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>);
const Code = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>);
const Heart = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>);
const FilterIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>);
const SearchIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);


// --- Mock Data for Experts (Updated with Skills) ---
const allExperts = [
    { id: 1, name: "Suresh Gupta", category: "Accountants & CAs", specialty: "Tax Consultant", experience: 12, rating: 4.8, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=SG", bio: "Suresh Gupta is an experienced tax consultant who helps startups and small businesses with their tax planning and compliance.", languages: ["Hindi", "English"], fee: 1500, skills: ["Income Tax", "GST Filing", "TDS", "Audit"], qualifications: ["Chartered Accountant (ICAI)", "B.Com (Hons)"], reviews: [{name: "Rohan S.", comment: "Excellent service and deep knowledge of tax laws. Highly recommended."}] },
    { id: 2, name: "Meena Verma", category: "Accountants & CAs", specialty: "Corporate Finance", experience: 15, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=MV", bio: "With 15 years of experience in corporate finance, Meena optimizes your business's financial structure for sustainable growth.", languages: ["English", "Marathi"], fee: 2500, skills: ["Financial Modeling", "Valuation", "Fundraising", "Mergers & Acquisitions"], qualifications: ["Chartered Accountant (ICAI)", "MBA in Finance"], reviews: [{name: "Priya K.", comment: "Meena's advice was crucial for our company's growth. A true professional."}] },
    { id: 3, name: "Rajesh Kumar", category: "Accountants & CAs", specialty: "GST Expert", experience: 8, rating: 4.7, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=RK", bio: "Rajesh Kumar is a specialist in GST registration and filing, ensuring your business stays compliant with all regulations.", languages: ["Hindi"], fee: 1200, skills: ["GST Registration", "GST Returns", "E-Way Bill", "Input Tax Credit"], qualifications: ["Chartered Accountant (ICAI)", "Certified GST Practitioner"], reviews: [{name: "Amit P.", comment: "Made the whole GST process very simple for us."}] },
    { id: 4, name: "Pandit Ravi Joshi", category: "Astrologers", specialty: "Vedic Astrology", experience: 20, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=RJ", bio: "A master of Vedic astrology, Pandit Ravi Joshi provides guidance on career, marriage, and other important life decisions.", languages: ["Hindi", "Sanskrit"], fee: 2000, skills: ["Horoscope Reading", "Kundli Matching", "Vastu Shastra", "Numerology"], qualifications: ["Jyotish Acharya", "Vastu Ratna"], reviews: [{name: "Sunita V.", comment: "His predictions are incredibly accurate. Provided great clarity."}] },
    { id: 5, name: "Anjali Sharma", category: "Astrologers", specialty: "Tarot Card Reader", experience: 10, rating: 4.8, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=AS", bio: "Anjali Sharma is a renowned Tarot Card reader who offers deep insights into your present and future.", languages: ["Hindi", "English"], fee: 1800, skills: ["Tarot Reading", "Angel Reading", "Crystal Healing"], qualifications: ["Certified Tarot Master", "Diploma in Angel Healing"], reviews: [{name: "Vikram R.", comment: "A very insightful and comforting session."}] },
    { id: 6, name: "Advocate Alok Singh", category: "Legal Advisors", specialty: "Corporate Law", experience: 18, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=AS", bio: "Advocate Alok Singh is a well-known name in corporate law, specializing in legal contracts and compliance.", languages: ["English"], fee: 3000, skills: ["Contract Drafting", "Legal Compliance", "Intellectual Property", "Corporate Governance"], qualifications: ["LL.M. in Corporate Law", "LL.B."], reviews: [{name: "TechCorp", comment: "Alok is our go-to legal advisor for all corporate matters."}] },
    { id: 7, name: "Priya Desai", category: "Legal Advisors", specialty: "Family Law", experience: 12, rating: 4.7, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=PD", bio: "Priya Desai is a family law attorney whose experience can be instrumental in navigating sensitive family matters.", languages: ["Hindi", "Gujarati"], fee: 2200, skills: ["Divorce Law", "Child Custody", "Alimony", "Property Disputes"], qualifications: ["LL.B.", "Post Graduate Diploma in Family Law"], reviews: [{name: "Anonymous", comment: "Handled my case with utmost professionalism and empathy."}] },
    { id: 8, name: "Amit Khanna", category: "Business Consultants", specialty: "Startup Growth", experience: 14, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=AK", bio: "Amit Khanna helps startups build their growth strategy, from marketing and sales to securing funding.", languages: ["Hindi", "English"], fee: 3500, skills: ["Business Plan", "Market Research", "Growth Hacking", "Pitch Deck"], qualifications: ["MBA from IIM Ahmedabad", "B.Tech in Computer Science"], reviews: [{name: "Innovate Inc.", comment: "Amit's strategies were a game-changer for our startup."}] },
    { id: 9, name: "Sunita Menon", category: "Business Consultants", specialty: "Marketing Strategy", experience: 16, rating: 4.8, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=SM", bio: "Sunita Menon is a marketing guru who provides innovative ideas to establish your brand in the market.", languages: ["English", "Tamil"], fee: 4000, skills: ["Digital Marketing", "Branding", "SEO", "Social Media Marketing"], qualifications: ["MBA in Marketing", "Certified Digital Marketing Professional (CDMP)"], reviews: [{name: "Brandify", comment: "Our marketing ROI has doubled since we hired Sunita."}] },
    { id: 10, name: "Vikram Rathore", category: "Business Consultants", specialty: "Operations Management", experience: 19, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=VR", bio: "Vikram Rathore specializes in streamlining business operations, which increases your company's efficiency.", languages: ["Hindi", "English"], fee: 4500, skills: ["Supply Chain", "Logistics", "Process Improvement", "Quality Control"], qualifications: ["M.Sc in Operations Management", "Six Sigma Black Belt"], reviews: [{name: "Logistics Pro", comment: "Vikram optimized our supply chain and saved us a fortune."}] },
    { id: 11, name: "Arjun Mehta", category: "Software & IT Consultants", specialty: "Cloud Solutions Architect", experience: 11, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=AM", bio: "Arjun Mehta is an expert in AWS and Azure cloud platforms and helps businesses migrate to the cloud seamlessly.", languages: ["English"], fee: 5000, skills: ["AWS", "Azure", "DevOps", "Microservices"], qualifications: ["AWS Certified Solutions Architect – Professional", "Microsoft Certified: Azure Solutions Architect Expert"], reviews: [{name: "DataSafe", comment: "Arjun's expertise in cloud architecture is unmatched."}] },
    { id: 12, name: "Sneha Reddy", category: "Software & IT Consultants", specialty: "Cybersecurity Expert", experience: 9, rating: 4.8, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=SR", bio: "Sneha Reddy protects your digital assets from online threats with state-of-the-art cybersecurity measures.", languages: ["English", "Telugu"], fee: 4800, skills: ["Network Security", "Ethical Hacking", "Data Protection", "Vulnerability Assessment"], qualifications: ["Certified Ethical Hacker (CEH)", "CISSP - Certified Information Systems Security Professional"], reviews: [{name: "SecureNet", comment: "We feel much safer after Sneha's audit and recommendations."}] },
    { id: 13, name: "Dr. Riya Sharma", category: "Health & Wellness", specialty: "Nutritionist", experience: 10, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=RS", bio: "Dr. Riya Sharma provides personalized guidance for a balanced diet and a healthy lifestyle.", languages: ["Hindi", "English"], fee: 1000, skills: ["Diet Planning", "Weight Management", "Sports Nutrition", "Clinical Nutrition"], qualifications: ["Ph.D. in Nutrition and Dietetics", "M.Sc. in Food and Nutrition"], reviews: [{name: "Aarav J.", comment: "Lost 10kgs in 3 months thanks to her diet plan!"}] },
    { id: 14, name: "Yogacharya Sameer", category: "Health & Wellness", specialty: "Yoga & Meditation", experience: 15, rating: 4.9, image: "https://placehold.co/150x150/E2E8F0/4A5568?text=YS", bio: "Yogacharya Sameer teaches yoga and meditation to reduce stress and achieve mental peace.", languages: ["Hindi", "English", "Sanskrit"], fee: 800, skills: ["Hatha Yoga", "Vinyasa", "Pranayama", "Mindfulness"], qualifications: ["Certified Yoga Teacher (500-hour)", "M.A. in Yogic Science"], reviews: [{name: "Shanti M.", comment: "His classes are a perfect start to the day. So calming."}] },
];

// ====================================================================
// --- File: components/Navbar.js ---
// ====================================================================
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white shadow-md fixed w-full z-30 top-0">
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

// ====================================================================
// --- File: pages/HomePage.js ---
// ====================================================================
const HomePage = () => {
    const Hero = () => (
        <section id="home" className="pt-24 bg-gray-50">
            <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 lg:w-3/5 mb-10 md:mb-0 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">Find the Right <span className="text-blue-600">Expert</span> For Your Needs</h1>
                    <p className="text-lg text-gray-600 mb-8">Connect with verified professionals - CAs, Astrologers, Lawyers, and more, all on one platform.</p>
                    <a href="#experts" className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg hover:bg-blue-700 transition duration-300">Browse Experts</a>
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
            { icon: <Calculator className="w-12 h-12" />, title: "Accountants & CAs", description: "Find experts for tax filing, financial planning, and business accounting." },
            { icon: <Sparkles className="w-12 h-12" />, title: "Astrologers", description: "Get guidance on your future, career, and relationships." },
            { icon: <Scale className="w-12 h-12" />, title: "Legal Advisors", description: "Connect with professionals for legal documents, agreements, and advice." },
            { icon: <Briefcase className="w-12 h-12" />, title: "Business Consultants", description: "Get strategy and growth advice to scale your business." },
            { icon: <Code className="w-12 h-12" />, title: "Software & IT Consultants", description: "Connect with developers, cloud experts, and IT professionals for your technical projects." },
            { icon: <Heart className="w-12 h-12" />, title: "Health & Wellness", description: "Stay healthy with advice from nutritionists, yoga teachers, and fitness coaches." }
        ];
        return (
            <section id="experts" className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">Expert Categories</h2>
                        <p className="text-lg text-gray-600 mt-4">We connect you with the best professionals in every field.</p>
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
                    <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
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
                    <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signup-email">Email Address</label>
                    <input type="email" id="signup-email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
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
// --- File: pages/ExpertListPage.js (MODIFIED) ---
// ====================================================================
const ExpertListPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const decodedCategory = decodeURIComponent(category);
    
    const expertsInCategory = useMemo(() => allExperts.filter(expert => expert.category === decodedCategory), [decodedCategory]);
    
    const availableLanguages = useMemo(() => {
        const langSet = new Set();
        expertsInCategory.forEach(exp => exp.languages.forEach(lang => langSet.add(lang)));
        return Array.from(langSet);
    }, [expertsInCategory]);

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        searchTerm: '',
        experience: 0,
        rating: 0,
        languages: [],
        maxFee: 5000
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleLanguageChange = (e) => {
        const { value, checked } = e.target;
        setFilters(prev => {
            const newLangs = checked ? [...prev.languages, value] : prev.languages.filter(lang => lang !== value);
            return { ...prev, languages: newLangs };
        });
    };
    
    const resetFilters = () => {
        setFilters(prev => ({
            ...prev, // Keep searchTerm
            experience: 0,
            rating: 0,
            languages: [],
            maxFee: 5000
        }));
    }

    const filteredExperts = useMemo(() => expertsInCategory.filter(expert => {
        return (
            (filters.rating === 0 || expert.rating >= filters.rating) &&
            (expert.experience >= filters.experience) &&
            (expert.fee <= filters.maxFee) &&
            (expert.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || expert.specialty.toLowerCase().includes(filters.searchTerm.toLowerCase())) &&
            (filters.languages.length === 0 || filters.languages.some(lang => expert.languages.includes(lang)))
        );
    }), [expertsInCategory, filters]);

    const ExpertProfileCard = ({ expert }) => (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 w-full hover:shadow-xl transition-shadow duration-300">
            <img src={expert.image} alt={expert.name} className="w-24 h-24 rounded-full object-cover border-4 border-gray-200" />
            <div className="text-center sm:text-left flex-grow">
                
                <h3 className="text-2xl font-bold text-gray-800">{expert.name}</h3>
                <p className="text-blue-600 font-semibold">{expert.specialty}</p>
                <div className="flex items-center justify-center sm:justify-start mt-2 text-sm text-gray-500">
                    <span>{expert.experience} years exp</span>
                    <span className="mx-2">|</span>
                    <div className="flex items-center">
                        <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                        <span>{expert.rating}</span>
                    </div>
                </div>
                 <p className="text-sm text-gray-600 mt-1">Speaks: {expert.languages.join(', ')}</p>
            </div>
            <div className="text-center sm:text-right">
                 <p className="text-2xl font-bold text-green-600">₹{expert.fee}</p>
                 <p className="text-xs text-gray-500">per session</p>
                 <Link to={`/profile/${expert.id}`} className="block mt-2 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 whitespace-nowrap">View Profile</Link>
            </div>
        </div>
    );
    
    const FilterModal = ({ onClose }) => (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-end sm:items-center">
             <div className="bg-white p-6 rounded-t-2xl sm:rounded-xl shadow-lg w-full max-w-md transform transition-transform duration-300">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h3 className="text-xl font-bold">Filters</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800"><X /></button>
                </div>
                <div className="space-y-6 max-h-[60vh] overflow-y-auto p-2">
                    {/* --- Search by name is REMOVED from modal --- */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                        <div className="flex justify-between">
                            {[1, 2, 3, 4, 5].map(star => (
                                <button key={star} onClick={() => setFilters(f => ({...f, rating: star === f.rating ? 0 : star }))} className={`p-1 rounded-full transition-colors ${filters.rating >= star ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`}>
                                    <StarIcon className="w-6 h-6"/>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="experience" className="block text-sm font-semibold text-gray-700">Minimum Experience: <span className="font-bold text-blue-600">{filters.experience} years</span></label>
                        <input type="range" id="experience" name="experience" min="0" max="20" value={filters.experience} onChange={handleFilterChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                    </div>
                    <div>
                        <label htmlFor="maxFee" className="block text-sm font-semibold text-gray-700">Max Fee: <span className="font-bold text-blue-600">₹{filters.maxFee}</span></label>
                        <input type="range" id="maxFee" name="maxFee" min="500" max="5000" step="100" value={filters.maxFee} onChange={handleFilterChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Language</h4>
                        <div className="space-y-2">
                            {availableLanguages.map(lang => (
                                <label key={lang} className="flex items-center">
                                    <input type="checkbox" value={lang} checked={filters.languages.includes(lang)} onChange={handleLanguageChange} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                                    <span className="ml-2 text-gray-700">{lang}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex gap-4">
                    <button onClick={resetFilters} className="w-1/2 bg-gray-200 text-gray-800 py-3 rounded-md hover:bg-gray-300">Reset</button>
                    <button onClick={onClose} className="w-1/2 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">Apply Filters</button>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-gray-50 py-20 min-h-screen pt-28">
            <div className="container mx-auto px-6">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:underline">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                </button>
                <main>
                     <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-800">Experts in {decodedCategory}</h2>
                        <p className="text-gray-600">{filteredExperts.length} experts found</p>
                    </div>

                    {/* --- NEW: Search bar and filter button are separated --- */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <div className="relative flex-grow">
                             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <SearchIcon className="w-5 h-5 text-gray-400" />
                            </span>
                            <input
                                type="text"
                                name="searchTerm"
                                value={filters.searchTerm}
                                onChange={handleFilterChange}
                                placeholder="Search by name or specialty..."
                                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button onClick={() => setIsFilterOpen(true)} className="flex-shrink-0 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 py-2.5 px-4 rounded-lg shadow-sm hover:bg-gray-100">
                            <FilterIcon className="w-5 h-5" />
                            <span>Filters</span>
                        </button>
                    </div>
                    
                    <div className="space-y-6">
                        {filteredExperts.length > 0 ? (
                            filteredExperts.map((expert) => <ExpertProfileCard key={expert.id} expert={expert} />)
                        ) : (
                            <div className="text-center py-16 bg-white rounded-lg shadow-md">
                                <p className="text-xl text-gray-600">No experts match your criteria.</p>
                                <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
            {isFilterOpen && <FilterModal onClose={() => setIsFilterOpen(false)} />}
        </section>
    );
};


// ====================================================================
// --- File: pages/ExpertProfilePage.js (Redesigned) ---
// ====================================================================
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
            // Adjusted padding for mobile
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
                            {/* Added overflow-x-auto for scrollable tabs on mobile */}
                            <nav className="-mb-px flex space-x-2 sm:space-x-6 px-4 sm:px-6 overflow-x-auto">
                                <TabButton tabName="about">About</TabButton>
                                {/* NEW: Qualification Tab */}
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

                            {/* NEW: Qualification Content Panel */}
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