import React, { useState } from 'react'
import blackLogoSquare from '../images/black-logo-square.png'
import blackLogo from '../images/black-logo.png'
import whiteLogoSquare from '../images/white-logo-square.png'
import whiteLogo from '../images/white-logo.png'
import Switch from './switch'
import { Link } from 'gatsby'

const NavBar = ({ checked, onChange, theme }) => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="laptop:py-0 py-4 text-base bg-transparent">
            <div className="max-w-7xl tablet:px-6 laptop:px-8 px-2 mx-auto">
                <div className="relative flex items-center justify-between h-16">
                    <div className="laptop:hidden absolute inset-y-0 left-0 flex items-center">
                        <button
                            className="hover:text-main-text hover:bg-gray-700 hover:bg-opacity-25 focus:outline-none focus:text-main-text inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md"
                            aria-label="Main menu"
                            aria-expanded="false"
                            onClick={() => setOpen(!open)}
                        >
                            {!open ? (
                                <svg
                                    className="block w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="laptop:items-stretch laptop:justify-between laptop:flex-row flex flex-col items-center flex-1">
                        <div className="flex-shrink-0 py-2">
                            <Link to="/">
                                {theme === 'light' ? (
                                    <>
                                        <img
                                            className="laptop:hidden block w-auto h-10"
                                            src={blackLogoSquare}
                                            alt="Rita Bradley logo"
                                        />
                                        <img
                                            className="laptop:block hidden w-auto h-16"
                                            src={blackLogo}
                                            alt="Rita Bradley logo"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <img
                                            className="laptop:hidden block w-auto h-10"
                                            src={whiteLogoSquare}
                                            alt="Rita Bradley logo"
                                        />
                                        <img
                                            className="laptop:block hidden w-auto h-16"
                                            src={whiteLogo}
                                            alt="Rita Bradley logo"
                                        />
                                    </>
                                )}
                            </Link>
                        </div>
                        <div className="flex items-center justify-between py-1">
                            <div className="laptop:block laptop:ml-6 hidden">
                                <div>
                                    <Link
                                        to="/blog/"
                                        className="text-main-text hover:text-main-accent focus:outline-none focus:text-main-accent px-3 py-2 font-bold leading-5 transition duration-150 ease-in-out"
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        to="/projects/"
                                        className="text-main-text hover:text-main-accent focus:outline-none focus:text-main-accent px-3 py-2 ml-4 font-bold leading-5 transition duration-150 ease-in-out"
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        to="/about/"
                                        className="text-main-text hover:text-main-accent focus:outline-none focus:text-main-accent px-3 py-2 ml-4 font-bold leading-5 transition duration-150 ease-in-out"
                                    >
                                        About Me
                                    </Link>
                                    <Link
                                        to="/contact/"
                                        className="text-main-text hover:text-main-accent focus:outline-none focus:text-main-accent px-3 py-2 ml-4 font-bold leading-5 transition duration-150 ease-in-out"
                                    >
                                        Contact Me
                                    </Link>
                                </div>
                            </div>
                            <Switch checked={checked} onChange={onChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={open ? 'block sm:block' : 'hidden sm:hidden'}>
                <div className="px-2 pt-10 pb-3">
                    <Link
                        to="/blog/"
                        className="text-main-text hover:text-main-text hover:bg-gray-500 hover:bg-opacity-25 focus:outline-none focus:text-main-text focus:bg-gray-500 block px-3 py-2 font-medium transition duration-300 ease-in-out rounded-md"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/projects/"
                        className="text-main-text hover:text-main-text hover:bg-gray-500 hover:bg-opacity-25 focus:outline-none focus:text-main-text focus:bg-gray-500 block px-3 py-2 mt-1 font-medium text-gray-300 transition duration-150 ease-in-out rounded-md"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/about/"
                        className="text-main-text hover:text-main-text hover:bg-gray-500 hover:bg-opacity-25 focus:outline-none focus:text-main-text focus:bg-gray-500 block px-3 py-2 mt-1 font-medium text-gray-300 transition duration-150 ease-in-out rounded-md"
                    >
                        About Me
                    </Link>
                    <Link
                        to="/contact/"
                        className="text-main-text hover:text-main-text hover:bg-gray-500 hover:bg-opacity-25 focus:outline-none focus:text-main-text focus:bg-gray-500 block px-3 py-2 mt-1 font-medium text-gray-300 transition duration-150 ease-in-out rounded-md"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
