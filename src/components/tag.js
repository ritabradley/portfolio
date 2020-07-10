import React from 'react'
import { Link } from 'gatsby'

const Tag = ({ children }) => {
    return (
        <span className="inline-flex m-1 items-center px-2 py-0.75 rounded text-xs font-medium leading-4 bg-main-accent text-red-100 hover:bg-gray-800 transition duration-300 ease-in-out">
            <Link to="/">{children}</Link>
        </span>
    )
}

export default Tag
