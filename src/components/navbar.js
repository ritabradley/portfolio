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
        <nav className="bg-transparent">
            <div className="px-2 mx-auto max-w-7xl tablet:px-6 laptop:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center laptop:hidden">
                        <button
                            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-main-text hover:bg-gray-700 hover:bg-opacity-25 focus:outline-none focus:text-main-text"
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
                    <div className="flex items-center justify-center flex-1 laptop:items-stretch laptop:justify-between">
                        <div className="flex-shrink-0">
                            <Link to="/">
                                {theme === 'light' ? (
                                    <>
                                        <img
                                            className="block w-auto h-8 laptop:hidden"
                                            src={blackLogoSquare}
                                            alt="Rita Bradley logo"
                                        />
                                        <img
                                            className="hidden w-auto h-16 laptop:block"
                                            src={blackLogo}
                                            alt="Rita Bradley logo"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <img
                                            className="block w-auto h-8 laptop:hidden"
                                            src={whiteLogoSquare}
                                            alt="Rita Bradley logo"
                                        />
                                        <img
                                            className="hidden w-auto h-16 laptop:block"
                                            src={whiteLogo}
                                            alt="Rita Bradley logo"
                                        />
                                    </>
                                )}
                            </Link>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="hidden laptop:block laptop:ml-6">
                                <div className="flex">
                                    <Link
                                        to="/blog/"
                                        className="px-3 py-2 font-bold leading-5 transition duration-150 ease-in-out text-main-text hover:text-main-accent focus:outline-none focus:text-main-accent"
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        to="/projects/"
                                        className="px-3 py-2 ml-4 font-bold leading-5 transition duration-150 ease-in-out text-main-text hover:text-main-accent focus:outline-none focus:text-main-accent"
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        to="/about/"
                                        className="px-3 py-2 ml-4 font-bold leading-5 transition duration-150 ease-in-out text-main-text hover:text-main-accent focus:outline-none focus:text-main-accent"
                                    >
                                        About Me
                                    </Link>
                                    <Link
                                        to="/contact/"
                                        className="px-3 py-2 ml-4 font-bold leading-5 transition duration-150 ease-in-out text-main-text hover:text-main-accent focus:outline-none focus:text-main-accent"
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
                <div className="px-2 pt-2 pb-3">
                    <Link
                        to="/blog/"
                        className="block px-3 py-2 font-medium transition duration-300 ease-in-out rounded-md text-main-text hover:text-main-text hover:bg-gray-700 focus:outline-none focus:text-main-text focus:bg-gray-700"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/projects/"
                        className="block px-3 py-2 mt-1 font-medium text-gray-300 transition duration-150 ease-in-out rounded-md text-main-text hover:text-main-text hover:bg-gray-700 focus:outline-none focus:text-main-text focus:bg-gray-700"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/about/"
                        className="block px-3 py-2 mt-1 font-medium text-gray-300 transition duration-150 ease-in-out rounded-md text-main-text hover:text-main-text hover:bg-gray-700 focus:outline-none focus:text-main-text focus:bg-gray-700"
                    >
                        About Me
                    </Link>
                    <Link
                        to="/contact/"
                        className="block px-3 py-2 mt-1 font-medium text-gray-300 transition duration-150 ease-in-out rounded-md text-main-text hover:text-main-text hover:bg-gray-700 focus:outline-none focus:text-main-text focus:bg-gray-700"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
