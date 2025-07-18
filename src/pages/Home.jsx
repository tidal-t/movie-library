import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import "./test.css"
import { Outlet } from 'react-router-dom'
import Footer from '../components/Drawer/components/Footer'

export default function Home() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Main />
                <Footer />

            </div>
        </>
    )
}
