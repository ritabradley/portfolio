import React from 'react'
import { Link } from 'gatsby'

const Tag = ({ children }) => {
    return (
        <span className="bg-main-accent hover:bg-gray-800 inline-flex items-center p-1 m-1 text-sm font-medium leading-5 text-red-100 transition duration-300 ease-in-out rounded-md">
            <Link to="/">{children}</Link>
        </span>
    )
}

export default Tag
