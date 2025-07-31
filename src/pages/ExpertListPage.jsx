import React, { useState, useMemo } from 'react';

import { useParams, useNavigate, Link } from 'react-router-dom';

import { motion } from 'framer-motion';



import { allExperts } from '../data/experts';

import { StarIcon, ArrowLeft, FilterIcon, SearchIcon, X } from '../components/icons';



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

            ...prev,

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

        <motion.div className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 w-full hover:shadow-xl transition-shadow duration-300"

          initial={{ opacity: 0, y: 100, scale: 0.8 }}

      animate={{ opacity: 1, y: 0, scale: 1 }}

      transition={{

        type: 'spring',

        stiffness: 100,

        damping: 15,

        delay: 0.2

      }}

      whileHover={{
  scale: 1.05,
  boxShadow: '0px 15px 30px rgba(0,0,0,0.2)',
  transition: {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.25
  }
}}


      whileTap={{ scale: 0.98 }}

        >

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

        </motion.div>

    );

   

    const FilterModal = ({ onClose }) => (

        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-end sm:items-center">

             <div className="bg-white p-6 rounded-t-2xl sm:rounded-xl shadow-lg w-full max-w-md transform transition-transform duration-300">

                <div className="flex justify-between items-center border-b pb-2 mb-4">

                    <h3 className="text-xl font-bold">Filters</h3>

                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800"><X /></button>

                </div>

                <div className="space-y-6 max-h-[60vh] overflow-y-auto p-2">

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

            <motion.div className="container mx-auto px-6">

                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:underline">

                    <ArrowLeft className="w-5 h-5" />

                    Back to Home

                </button>

                <main>

                     <div className="mb-6">

                        <h2 className="text-3xl font-bold text-gray-800">Experts in {decodedCategory}</h2>

                        <p className="text-gray-600">{filteredExperts.length} experts found</p>

                    </div>



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
            </motion.div>
            {isFilterOpen && <FilterModal onClose={() => setIsFilterOpen(false)} />}
        </section>
    );
};

export default ExpertListPage;