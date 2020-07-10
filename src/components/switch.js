import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/pro-duotone-svg-icons'

const style = {
    '--fa-primary-color': '#A93541',
    '--fa-secondary-color': '#E4B363',
    '--fa-primary-opacity': 1,
    '--fa-secondary-opacity': 1,
}

const Switch = ({ checked, onChange }) => {
    return (
        <div className="laptop:pl-10 flex items-center h-auto">
            <FontAwesomeIcon icon={faSun} size={`lg`} style={style} />
            <label
                className="flex items-center px-1 cursor-pointer"
                htmlFor="theme-toggler"
            >
                <div className="relative">
                    <input
                        id="theme-toggler"
                        type="checkbox"
                        className="hidden"
                        checked={checked}
                        onChange={onChange}
                    />
                    <div className="toggler-line w-10 h-5 bg-gray-200 border border-gray-200 border-opacity-50 rounded-full shadow-inner"></div>
                    <div className="bg-main-text toggler-dot all duration-3 absolute inset-y-0 left-0 w-5 h-5 ease-in-out rounded-full shadow-md"></div>
                </div>
            </label>
            <FontAwesomeIcon icon={faMoon} className="text-secondary-accent" />
        </div>
    )
}

export default Switch
