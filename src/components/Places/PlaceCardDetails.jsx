import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import LoadingState from '../LoadingState/LoadingState';

const PlaceCardDetails = () => {
    const { id } = useParams();
    const [place, setPlace] = useState();

    useEffect(() => {
        const fetchPlaceDetails = async () => {
            try {
                const response = await fetch(`https://limitless-bangladesg-server-1.onrender.com/place/${id}`);
                const data = await response.json();
                setPlace(data);
            } catch (error) {
                console.error("Error fetching place details:", error);
            }
        };

        fetchPlaceDetails();
    }, [id]);



    if (!place) {
        return <LoadingState />
    }
    return (
        <div>
            <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800 mt-12">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col lg:flex-row overflow-hidden rounded-lg shadow-lg bg-base dark:bg-gray-800">
                        <img
                            src={place.images[1]}
                            alt={place.place_name}
                            className="w-full h-80 object-cover object-center rounded-t-lg lg:rounded-t-none lg:rounded-l-lg dark:bg-gray-500"
                        />
                        <div className="flex flex-col lg:w-1/2 lg:pl-6 lg:pt-6 lg:pb-8 space-y-4 p-2 ">
                            <h2 className="text-2xl font-semibold  dark:text-gray-200">{place.place_name}</h2>
                            <h3 className="text-3xl font-bold  dark:text-gray-100">{place.location}</h3>
                            <p className="text-lg dark:text-gray-400">{place.division}</p>
                            <p className="text-lg font-bold dark:text-gray-400">Best Time To Visit: {place.best_time_to_visit}</p>
                            <p className="text-md font-medium  dark:text-gray-300 uppercase mt-2">{place.key_features}</p>
                            {/* Uncomment and use the button if needed */}
                            {/* <button type="button" className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">Action</button> */}
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={place.images[2]} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <p className="my-6 dark:text-gray-600">{place.history1}</p>
                            {/* <button type="button" className="self-start">Action</button> */}
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={place.images[2]} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <p className="my-6 dark:text-gray-600">{place.history2}</p>
                            {/* <button type="button" className="self-start">Action</button> */}
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={place.images[3]} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <p className="my-6 dark:text-gray-600">{place.history3}</p>
                            {/* <button type="button" className="self-start">Action</button> */}
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={place.images[4]} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <p className="my-6 dark:text-gray-600">{place.history4}</p>
                            {/* <button type="button" className="self-start">Action</button> */}
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={place.images[1]} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <p className="my-6 dark:text-gray-600">{place.history5}</p>
                            {/* <button type="button" className="self-start">Action</button> */}
                        </div>
                    </div>

                </div>
                <section className="mt-12">
                <a target="_blank" className='text-center flex items-center justify-center mb-1 p-2 bg-slate-600 text w-2/3 mx-auto text-white' href={place.google_map}>Go Directly</a>
                    <div className="w-full h-auto">
                        {place.google_map ? (
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=${place.google_map}`}
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        ) : (
                            <p>Map information is not available.</p>
                        )}
                    </div>
                    
                </section>
            </section>


        </div>

    );
};

export default PlaceCardDetails;
