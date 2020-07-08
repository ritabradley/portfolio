import React from 'react'
import NavBar from './navbar'

const Header = ({ checked, onChange, theme }) => {
    return (
        <header>
            <NavBar theme={theme} checked={checked} onChange={onChange} />
        </header>
    )
}

export default Header
