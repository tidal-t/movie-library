import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import "./test.css"
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='flex'>
                <div className="wrapper">
                    <Header />
                    <Main />

                </div>
                <Outlet />
            </div>
        </>
    )
}
