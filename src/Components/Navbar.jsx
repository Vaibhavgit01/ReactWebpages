import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    const [ismenu, setIsMenu] = useState(false)

    const handleToggle=()=>{
        // setIsMenu(!ismenu)
        setIsMenu((prev) => !prev)
    }
    const handleCloseMenu = () => {
        setIsMenu(false);
    };
    return (
        <header className=" sticky z-50 top-0">
            <nav className="bg-white border-gray-500 px-2.5 lg:px-6 py-3 mx-auto max-w-screen-xl mt-3 shadow-xl rounded-lg">
                <div className="flex flex-wrap justify-between items-center  ">
                    {ismenu ? (<RxCross2 className='text-xl mx-1  border-2 border-gray-800 shadow-lg cursor-pointer rounded-lg w-10 h-8 md:hidden' onClick={handleToggle}/>):
                    (<GiHamburgerMenu className='text-xl mx-1  border-2 border-gray-800 shadow-lg cursor-pointer rounded-lg w-10 h-8 md:hidden' onClick={handleToggle}/>)}
                    <Link to="/" className="flex items-center ">
                    
                        <img
                            src="./logo.png"
                            className="mr-5 h-14 rounded-xl md:mx-0 md:mr-3 md:h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2 gap-1">
                        <Link
                            to="Login"
                            className="bg-gray-100 text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-[15px] px-2 lg:px-5 py-2 lg:py-2.5 mr-1 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="Register"
                            className="text-white bg-orange-700 hover:bg-orange-800 font-medium focus:ring-4 focus:ring-orange-300  rounded-lg text-[17px] px-2 lg:px-5 py-2 lg:py-2.5 mr-3 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className={`${ismenu ? "flex" :"hidden" } flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition-all delay-100 ease-in-out  `}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
                            <li>
                                <NavLink
                                to="/" onClick={handleCloseMenu} 
                                    className={({isActive}) =>
                                        `block ${isActive ? "text-orange-600":"text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about" onClick={handleCloseMenu} 
                                    className={({isActive}) =>
                                        `block ${isActive ? "text-orange-600":"text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact" onClick={handleCloseMenu}
                                    className={({isActive}) =>
                                        `block ${isActive? "text-orange-600":"text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b transition-allduration-200 ease-in-out border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Githubfoll" onClick={handleCloseMenu} 
                                    className={({isActive}) =>
                                        `block ${isActive? "text-orange-600":"text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar