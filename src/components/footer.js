import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faTwitter,
    faLinkedinIn,
    faDev,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import { useStaticQuery, graphql, Link } from 'gatsby'

const Footer = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                    }
                }
            }
        `
    )
    return (
        <footer className="max-w-7xl tablet:px-6 laptop:px-8 laptop:flex-row text-main-text laptop:text-base flex flex-col items-center justify-between p-2 text-sm bg-transparent">
            <p className="divide-secondary-accent laptop:w-3/4 laptop:p-0 lg:text-left w-full py-2 divide-x-2">
                <span className="px-2">
                    Copyright &copy; 2016 - {new Date().getFullYear()}
                </span>
                <span className="px-2">
                    <Link to="/" className="hover:text-main-accent">
                        {site.siteMetadata.author}
                    </Link>
                </span>
            </p>
            <nav className="lg:w-1/4 lg:text-right lg:justify-between flex items-center content-center justify-around w-full pt-2 pb-1 text-2xl">
                <a
                    href="https://github.com/ritabradley"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="hover:text-main-accent focus:text-main-accent transition-color duration-300 ease-in-out"
                    />
                </a>
                <a
                    href="https://twitter.com/rita_l_bradley"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="hover:text-main-accent focus:text-main-accent transition-color duration-300 ease-in-out"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/ritalbradley/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="hover:text-main-accent focus:text-main-accent transition-color duration-300 ease-in-out"
                    />
                </a>
                <a
                    href="https://dev.to/ritabradley"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faDev}
                        className="hover:text-main-accent focus:text-main-accent transition-color duration-300 ease-in-out"
                    />
                </a>
                <a
                    href="https://www.instagram.com/rita.l.bradley"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="hover:text-main-accent focus:text-main-accent transition-color duration-300 ease-in-out"
                    />
                </a>
            </nav>
        </footer>
    )
}

export default Footer
