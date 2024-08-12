import React from 'react';
import img from '../../assets/nijhum/1.jpeg'
import d from '../../assets/sonargaon/1.jpg'
import c from '../../assets/sajek/2.jpg'
import k from '../../assets/sundarbans/2.jpg'
import raj from '../../assets/mahas/1.jpg'
import r from '../../assets/tajhat/1.jpg'
import s from '../../assets/ratargul/3.png'
import my from '../../assets/my-jadu/1.jpg'
import kua from '../../assets/kuakata/3.jpg'
import { Link } from 'react-router-dom';
const SubDivision = () => {
    return (
        <div className='my-20'>
            <h1 className='font-cinzel text-lg md:text-2xl lg:text-3xl text-center font-bold mb-6'>Bangladesh's Divisional Wonders, Discover and Explore</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <Link to='/chittagong' className='transition-all duration-1000 transform hover:scale-105'>
                    <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={c} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-cinzel font-semibold tracking-wide">Chittagong</h2>
                                {/* <p className="dark:text-gray-800">{location}, {division}</p> */}
                            </div>
                            
                        </div>
                    </div>
                </Link>
                <Link to='/dhaka' className='transition-all duration-1000 transform hover:scale-105'>
                    <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={d} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-cinzel font-semibold tracking-wide">Dhaka</h2>
                                {/* <p className="dark:text-gray-800">{location}, {division}</p> */}
                            </div>
                            
                        </div>
                    </div>
                </Link>
                <Link to='/khulna' className='transition-all duration-1000 transform hover:scale-105'>
                    <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={k} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-cinzel font-semibold tracking-wide">Khulna</h2>
                                {/* <p className="dark:text-gray-800">{location}, {division}</p> */}
                            </div>
                            
                        </div>
                    </div>
                </Link>
                <Link to='/sylhet' className='transition-all duration-1000 transform hover:scale-105'>
                    <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={s} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-cinzel font-semibold tracking-wide">Sylhet</h2>
                                {/* <p className="dark:text-gray-800">{location}, {division}</p> */}
                            </div>
                            
                        </div>
                    </div>
                </Link>
                <Link to='/rajshahi' className='transition-all duration-1000 transform hover:scale-105'>
                    <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={raj} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-cinzel font-semibold tracking-wide">Rajshahi</h2>
                                {/* <p className="dark:text-gray-800">{location}, {division}</p> */}
                            </div>
                            
                        </div>
                    </div>
                </Link>
                <Link to='/rangpur' className='transition-all duration-1000 transform hover:scale-105'>
                    <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={r} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-cinzel font-semibold tracking-wide">Rangpur</h2>
                                {/* <p className="dark:text-gray-800">{location}, {division}</p> */}
                            </div>
                            
                        </div>
                    </div>
                </Link>
                <Link to='/barishal' className='transition-all duration-1000 transform hover:scale-105'>
                    <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={kua} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-cinzel font-semibold tracking-wide">Barishal</h2>
                                {/* <p className="dark:text-gray-800">{location}, {division}</p> */}
                            </div>
                            
                        </div>
                    </div>
                </Link>
                <Link to='/mymensingh' className='transition-all duration-1000 transform hover:scale-105'>
                    <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={my} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-3xl font-cinzel font-semibold tracking-wide">Mymensingh</h2>
                                {/* <p className="dark:text-gray-800">{location}, {division}</p> */}
                            </div>
                            
                        </div>
                    </div>
                </Link>
            
            </div>
        </div>
    );
};

export default SubDivision;