import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import { ThemeContext } from '../context/themeContext'

const Layout = ({ children }) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const handleThemeToggle = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <div
            className={`${
                theme === 'light' ? 'theme-light' : 'theme-dark'
            } bg-primary text-main-text text-center transition-all duration-300 m-0 px-0 py-5 flex flex-col min-h-screen justify-between`}
        >
            <Header
                theme={theme}
                checked={theme === 'dark' ? true : false}
                onChange={handleThemeToggle}
            />
            <main className="flex-grow p-8">{children}</main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
