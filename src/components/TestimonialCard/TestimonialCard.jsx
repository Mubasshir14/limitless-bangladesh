import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const TestimonialCard = () => {
    const [places, setPlaces] = useState([]);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchPlaces = async () => {
            setError(null); // Reset error state before fetch
            try {
                const response = await fetch('https://limitless-bangladesg-server-1.onrender.com/review');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPlaces(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchPlaces();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Determine the places to display based on the showAll state
    const displayedPlaces = showAll ? places : places.slice(0, 6);

    return (
        <div className='my-20'>
            <h1 className="text-3xl font-cinzel font-semibold text-center mb-3">Traveler Insights and Stories</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {displayedPlaces.map((p) => (
                    <div key={p._id} className="w-full  px-8 py-4 mt-16 rounded-lg shadow-lg border-2 dark:bg-gray-800">
                        <div className="flex justify-center -mt-16 md:justify-end">
                            <img
                                className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                                alt="Testimonial avatar"
                                src={p.image}
                            />
                        </div>
                        <h2 className="mt-2 text-lg font-semibold dark:text-white md:mt-0 font-cinzel">
                            {p.visited_place}
                        </h2>
                        <p><small>Visited: {p.visited_time}</small></p>
                        <p className="mt-2 text-sm">
                            {p.opinion}
                        </p>
                        <div className="flex justify-end mt-4">
                            <a href="#" className="text-lg font-bold font-cinzel dark:text-blue-300">
                                {p.name}, {p.country_name}
                            </a>
                        </div>
                    </div>
                ))}

            </div>
            {/* Button to toggle showing all cards */}
            <div className='flex items-center justify-center text-center'>
                {places.length > 6 && (
                    <div className="w-full flex justify-center items-center mt-8">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-4 py-2 bg-green-950 text-white dark:text-black rounded-lg hover:bg-green-700 transition-colors"
                        >
                            {showAll ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default TestimonialCard;
