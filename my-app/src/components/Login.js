import React, { useContext, useState } from 'react'
import '../css/login.css'
import { AuthContext } from '../AuthContext'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const [isLogin, setAuth] = useContext(AuthContext)
    const [authData, setAuthData] = useState({ uname: '', passwd: '' })

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (authData.uname !== '' && authData.passwd !== '') {
            setAuth(authData)
            // simpan state ke localstorage agar tidak hilang walau react diload ulang
            localStorage.setItem('authData', JSON.stringify(authData))
            history.push('/')
        }
    }

    const handleChange = (ev) => {
        let { name, value } = ev.target
        setAuthData({ ...authData, [name]: value })
    }

    const handleReset = () => {
        setAuthData({ uname: '', passwd: '' })
    }

    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <label><b>Username</b></label>
                        <input onChange={handleChange} value={authData.uname} type="text" placeholder="Username ..." name="uname" required />

                        <label style={{borderRadius:"10px"}}><b>Password</b></label>
                        <input onChange={handleChange} value={authData.passwd} type="password" placeholder="Password ..." name="passwd" required />

                        <button type="submit">Login</button>
                    </div>

                    <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                        <button onClick={handleReset} type="reset" className="cancelbtn">Cancel</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login