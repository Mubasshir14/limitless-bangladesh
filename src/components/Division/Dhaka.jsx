import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingState from '../LoadingState/LoadingState';
import PlacesCard from '../Places/PlacesCard';

const Dhaka = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPlaces = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/place');
                const data = await response.json();

                // Filter places that belong to Dhaka Division and limit to first 6 places
                const dhakaPlaces = data.filter(place => place.division === 'Dhaka Division');
                setPlaces(dhakaPlaces);
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
            <h1 className="text-3xl font-cinzel font-semibold text-center">Dhaka Division Places</h1>

            <div>
                {loading ? (
                    <LoadingState />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {places.map(p => <PlacesCard key={p._id} p={p} />)}
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default Dhaka;
