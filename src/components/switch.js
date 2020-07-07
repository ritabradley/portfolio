import React from 'react'

const Switch = ({ checked, onChange }) => {
    return (
        <label
            className="flex items-center cursor-pointer"
            htmlFor="theme-toggler"
        >
            <div className="relative">
                <input
                    id="theme-toggler"
                    type="checkbox"
                    class="hidden"
                    checked={checked}
                    onChange={onChange}
                />
                <div className="w-10 h-5 bg-gray-200 border border-gray-200 border-opacity-50 rounded-full shadow-inner toggler-line"></div>
                <div className="absolute inset-y-0 left-0 w-5 h-5 ease-in-out rounded-full shadow-md bg-main-text toggler-dot all duration-3"></div>
            </div>
        </label>
    )
}

export default Switch
