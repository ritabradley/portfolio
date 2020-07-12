import React from 'react'
import NavBar from './navbar'

const Header = ({ checked, onChange, theme }) => {
    return (
        <header className="bg-primary sticky top-0 z-20">
            <NavBar theme={theme} checked={checked} onChange={onChange} />
        </header>
    )
}

export default Header
