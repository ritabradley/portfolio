import React from 'react'

const PageHeading = ({ title, description }) => {
    return (
        <div className="text-center">
            <h1 className="font-display text-main-accent laptop:text-4xl laptop:leading-9 text-3xl font-bold leading-10 tracking-wide">
                {title}
            </h1>
            <p className="text-main-text laptop:mt-3 max-w-2xl mx-auto mt-4 text-base leading-7">
                {description}
            </p>
        </div>
    )
}

export default PageHeading
