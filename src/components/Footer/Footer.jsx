import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons
import logo from '../../assets/logo/l1.png'
import logo1 from '../../assets/logo/logo1.png'
const Footer = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <footer className="   dark:text-white">
            <div className="">
               

                <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

                <div className="flex flex-col md:flex-row items-center justify-between">
                    <Link to="/" className="mb-4 md:mb-0">
                    <Link to="/">
              <img src={theme === 'light' ? logo : logo1} className="w-36 h-16" alt="Logo" />
            </Link>
                    </Link>
                    

                    <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
                        <Link to="/" className="text-sm  dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                            Home
                        </Link>
                        <Link to="/places" className="text-sm  dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                            Places
                        </Link>
                        <Link to="/about" className="text-sm  dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">
                            About
                        </Link>
                        
                    </div>

                    <div className="flex gap-4">
                        <a href="https://facebook.com" className=" dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
                            <FaFacebook size={20} />
                        </a>
                        <a href="https://twitter.com" className=" dark:text-gray-200 hover:text-blue-400 dark:hover:text-blue-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://instagram.com" className=" dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <hr className='opacity-30 mt-2' />

            <p className="text-sm text-center my-2 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Your Limitless Bangladesh. All rights reserved.
      </p>
        </footer>
    );
};

export default Footer;
