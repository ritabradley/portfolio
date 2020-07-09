import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            key="fontawesome"
            src="https://kit.fontawesome.com/afd1563109.js"
            crossOrigin="anonymous"
        />,
    ])
}
