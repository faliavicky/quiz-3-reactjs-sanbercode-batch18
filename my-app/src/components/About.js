import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section>
            <div style={{ border: "1px solid grey", padding: "5px" }}>
                <h1 align="center">Data Peserta Sanbercode Bootcamp Reactjs</h1>
                <ol>
                    <li><b>Nama:</b> Falia Innocentia Ananda S.</li>
                    <li><b>Email:</b> faliavicky1128@gmail.com</li>
                    <li><b>Sistem Operasi yang digunakan:</b> Windows 10</li>
                    <li><b>Akun Github: </b><a target="_blank" href="https://github.com/faliavicky"> https://github.com/faliavicky</a></li>
                    <li><b>Akun Telegram:</b> @faliavicky</li>
                </ol>
            </div>
            <Link to="/">Kembali Ke Index</Link>
        </section>
    )
}

export default About