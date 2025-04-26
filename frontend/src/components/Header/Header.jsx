import React from 'react'
import { Link , NavLink} from 'react-router'
import { CgProfile } from "react-icons/cg";

export default function Header() {
    return (
        <header className=" sticky z-50 top-0">
            <nav className="bg-black text-lg px-4 lg:px-6 py-2.5 text-white">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center ">
                        <img
                            src="./pregglogo.png"
                            className="mr-2 mx-2 h-14 "
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                       
                        <Link
                            to="/register"
                            className="text-white bg-black hover:text-black  hover:bg-[#a094a6]  rounded-full text-2xl px-4 lg:px-2 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                          <CgProfile />
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-center mr-40 ">
                            <li>
                                <NavLink
                                to="/"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3  duration-200 
                                         border-b  hover:text-gray-600  lg:hover:bg-transparent lg:border-0 hover:text-gray-800 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Dashboard"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        border-b  lg:hover:bg-transparent lg:border-0 hover:text-gray-600  lg:p-0`
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/About"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        border-b  lg:hover:bg-transparent lg:border-0 hover:text-gray-600  lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/Contact"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        border-b  lg:hover:bg-transparent lg:border-0 hover:text-gray-600   lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
