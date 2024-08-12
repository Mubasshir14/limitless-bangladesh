import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo/logo1.png';
import logo1 from '../../assets/logo/E.png';
import { IoSearch } from "react-icons/io5";

const Nav = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleToggle = (e) => {
        setTheme(e.target.checked ? 'luxury' : 'light');
    };

    const navItem = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all">All PLaces</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            
            {/* <li>
  <input type="text" className="border-b-black border-b-2 outline-none bg-transparent rounded px-2 py-1 text-sm w-32" placeholder="Search" />
</li> */}

            {/* <li><NavLink to='/search'><IoSearch className="text-xl text-black"/></NavLink></li> */}
            <li className="md:hidden">
                <label className="flex cursor-pointer gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input
                        onChange={handleToggle}
                        type="checkbox"
                        checked={theme === 'luxury'}
                        className="toggle theme-controller bg-base-content" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
                
            </li>
        </>
    );

    return (
        <div className="font-cinzel h-[50px]">
            <div className="navbar fixed z-10 max-w-screen-xl bg-base-300/85 border-b-2 border-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu gap-4 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 dark:text-white shadow">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className="font-bold font-cinzel btn-ghost text-sm md:text-2xl">
                        <img src={theme === 'light' ? logo : logo1} className="w-36 h-16" alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu dark:text-white gap-4 menu-horizontal mr-6 px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex gap-4 p-1">
                    <label className="flex cursor-pointer gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            checked={theme === 'luxury'}
                            className="toggle theme-controller bg-base-content" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Nav;
