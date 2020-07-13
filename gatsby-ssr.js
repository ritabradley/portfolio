import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            key="fontawesome"
            src="https://kit.fontawesome.com/afd1563109.js"
            crossOrigin="anonymous"
        />,
        <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
        />,
        <script defer src="./src/js/all.js"></script>,
    ])
}
