import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext'
import { Link } from 'react-router-dom'
import '../css/styles.css'
import logo from '../img/logo.png'

const Header = () => {
    // const { AppAuthContext } = useState(AppAuthContext)
    const [isLogin, setAuth] = useContext(AuthContext)
    console.log(isLogin)

    const handleLogout = () => {
        localStorage.removeItem('authData')
        setAuth(false)
    }

    let menuMovieEditor = isLogin !== false ? (<li><Link to="/movie-editor">Movie List Editor</Link></li>) : ''
    let buttonAuth = isLogin ? (<li><Link onClick={handleLogout} to="/">Logout</Link></li>) : (<li><Link to="/login">Login</Link></li>)
    return (
        <li>
            <header>
                <img id="logo" alt="logo" src={logo} width="200px" />
                <nav>
                    <ul>
                        <li><Link to="/">Home </Link></li>
                        <li><Link to="/about">About </Link></li>
                        {menuMovieEditor}
                        {buttonAuth}
                    </ul>
                </nav>
            </header>

        </li>
    )
}

export default Header