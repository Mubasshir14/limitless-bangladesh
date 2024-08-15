import React, { useState } from 'react';
import PlacesCard from './Places/PlacesCard';

const SearchComponent = () => {
    const [similarItems, setSimilarItems] = useState([]);

    const text = async (e) => {
        e.preventDefault();
        const searchText = e.target.text.value.toLowerCase(); 

        
        const response = await fetch('https://limitless-bangladesg-server-1.onrender.com/place');
        const places = await response.json();

       
        const filteredPlaces = places.filter(place =>
            place.place_name.toLowerCase().includes(searchText) ||
            place.location.toLowerCase().includes(searchText) ||    
            place.division.toLowerCase().includes(searchText)       
        );

      
        setSimilarItems(filteredPlaces);
        e.target.reset();
    }

    return (
        <div className='mt-20 p-2 min-h-[calc(100vh-300px)]'>
            <form onSubmit={text} class="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
                <label className="input input-bordered focus:border-green-500  flex items-center gap-2 w-full md:w-auto">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search..."
                        className="grow px-4 py-2 rounded-lg    outline-none transition duration-300 w-full md:w-auto"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
                <button
                    type="submit"
                    class="px-4 py-2 bg-green-950/80 font-semibold text-white rounded-lg hover:bg-green-950/50 transition duration-300 w-full md:w-auto"
                >
                    Search
                </button>
            </form>



            <div className=''>

                {similarItems.length > 0 ? (

                    <div>
                        <h1 className="md:text-3xl my-4 font-cinzel font-semibold text-center">Your Search Result</h1>
                        <div className='grid grid-cols-1 p-2 md:grid-cols-3 gap-6 mt-6'>
                            {similarItems.map((p) => (
                                <PlacesCard key={p._id} p={p} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className='font-cinzel font-bold min-h-[calc(100vh-400px)] flex items-center justify-center'>Search The Place</p>
                )}
            </div>
        </div>
    );
};

export default SearchComponent;
