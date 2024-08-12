import { useState, useEffect } from 'react';
import LoadingState from '../LoadingState/LoadingState';
import PlacesCard from './PlacesCard';
import { Link } from 'react-router-dom';

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPlaces = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/place');
                const data = await response.json();
                setPlaces(data.slice(0, 6)); // Limit to first 8 places
            } catch (error) {
                console.error("Error fetching places:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    return (
        <div className="my-12">
            <h1 className="text-3xl font-cinzel font-semibold text-center">All Places</h1>
            <h1 className="text-xl font-cinzel font-semibold text-center mt-2">Bangladesh: A Journey Through History and Beauty</h1>

            <div>
                {loading ? (
                    <LoadingState />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mt-6">
                        {places.map(p => <PlacesCard key={p._id} p={p} />)}
                    </div>
                )}
            </div>
            <div className='flex justify-center items-center mt-3 '>
            <Link to='/all' className='btn bg-green-950 text-white'>Show All</Link>
            </div>
        </div>
    );
};

export default Places;
