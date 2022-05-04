import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/solid'

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <section>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-rose-500">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-black"
                            to="/"
                        >
                            Warehouse Management
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                           <MenuIcon className="h-5 w-5"/>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-black"
                                    to="/home"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-black"
                                    to="/inventory"
                                >
                                    Inventory
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-black"
                                    to="/inventory/manage"
                                >
                                    Manage Inventory
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-black"
                                    to="#pablo"
                                >
                                    Add a new item
                                </Link>
                            </li><li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-black"
                                    to="#pablo"
                                >
                                    Log in
                                </Link>
                            </li><li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:text-black"
                                    to="#pablo"
                                >
                                    Log out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;