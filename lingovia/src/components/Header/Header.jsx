import React from 'react'
import { Link , NavLink} from 'react-router'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-[#a094a6]  px-4 lg:px-6 py-2.5 text-black">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="C:\Users\Lenovo\react\lingovia\src\assets\major_design_tutorial_2x__1_-removebg-preview.png"
                            className="mr-3  mx-2 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                       
                        <Link
                            to="/Register"
                            className="text-white bg-black hover:bg-gray-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Register
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        border-b  hover:text-gray-800  lg:hover:bg-transparent lg:border-0 hover:text-gray-800 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/About"
                                    className={(isActive) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        border-b  lg:hover:bg-transparent lg:border-0 hover:text-gray-800  lg:p-0`
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
                                        border-b  lg:hover:bg-transparent lg:border-0 hover:text-gray-800   lg:p-0`
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
