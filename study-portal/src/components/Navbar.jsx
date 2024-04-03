import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: "/", title: "Start a search" },
        { path: "/search", title: "Search" },
        { path: "/add", title: "My Experience" },
        { path: "/home", title: "Ambassador Experience" },
        { path: "/about", title: "About" }
    ];

    return (
        <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            <nav className="flex justify-between items-center py-6">
                <a href="/" className="flex items-center gap-2 text-2xl text-black">
                    <svg
                        xmlns="https://www.w3.org/2000/svg"
                        width="29"
                        height="30"
                        viewBox="0 0 29 30"
                        fill="none"
                    >
                        <circle
                            cx="12.0143"
                            cy="12.5143"
                            r="12.0143"
                            fill="#3575E2"
                            fillOpacity="0.4"
                        />
                        <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
                    </svg>
                    <h5>Uni<span className='text-blue'>Portal</span></h5>
                </a>

                {/* nav items for large devices */}
                <ul className="hidden md:flex gap-12">
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-primary">
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Sign up and login button */}
                <div className="text-base text-primary font-medium space-x-5 hidden lg:flex items-center">
                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect()} className="py-2 px-5 border rounded bg-blue text-white">Log In</button>
                    )}
                    {isAuthenticated && (
                        <div className="flex items-center">
                            <button onClick={() => logout({ returnTo: window.location.origin })} className="py-2 px-5 border rounded bg-blue text-white">Log Out</button>
                            {user.picture && (
                                <img src={user.picture} alt="Profile" className="w-10 h-10 rounded-full ml-2" />
                            )}
                        </div>
                    )}
                </div>

                {/* mobile menu */}
                <div className="md:hidden block">
                    <button onClick={handleMenuToggler}>
                        {isMenuOpen ? <FaXmark className="w-5 h-5 text-primary" /> : <FaBarsStaggered className="w-5 h-5 text-primary" />}
                    </button>
                </div>
            </nav>

            {/* navitems for mobile */}
            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"} `}>
                <ul>
                    {navItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-white first:text-white py-1">
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                    {!isAuthenticated && <li className='text-white py-1'><Link to="/login" >Log in</Link></li>}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
