import React, { useState, useEffect } from 'react';
import LoadingState from '../LoadingState/LoadingState';
import PlacesCard from './PlacesCard';

const AllPlaces = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const placesPerPage = 15;

    useEffect(() => {
        const fetchPlaces = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://limitless-bangladesg-server-1.onrender.com/place');
                const data = await response.json();
                setPlaces(data);
            } catch (error) {
                console.error("Error fetching places:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    // Calculate the indexes for slicing the places array
    const indexOfLastPlace = currentPage * placesPerPage;
    const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
    const currentPlaces = places.slice(indexOfFirstPlace, indexOfLastPlace);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Number of pages needed
    const totalPages = Math.ceil(places.length / placesPerPage);

    return (
        <div>
            <div className="my-12 p-2">
                <h1 className="text-3xl font-cinzel font-semibold text-center">All Places</h1>

                {loading ? (
                    <LoadingState />
                ) : (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {currentPlaces.map(p => <PlacesCard key={p._id} p={p} />)}
                        </div>

                        {/* Pagination controls */}
                        <div className="flex justify-center mt-8">
                            <ul className="flex list-none space-x-2">
                                {[...Array(totalPages).keys()].map(number => (
                                    <li key={number + 1}>
                                        <button
                                            onClick={() => paginate(number + 1)}
                                            className={`px-4 py-2 border rounded-lg ${currentPage === number + 1 ? 'bg-green-900 text-white' : 'bg-white text-green-900 border-green-900'} transition-colors duration-300 ease-in-out`}
                                        >
                                            {number + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllPlaces;
