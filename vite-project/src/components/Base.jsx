import React from "react"

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LoginComponent, Register } from './Auth'
import { Home } from "./Home"
import { IssuePage } from "./Issue"

import { Navbar } from "./Navbar"

export const Base = () => {
    return (
        <React.Fragment >
            <>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-2 ">
                        <Navbar />
                    </div>
                    <div className="col-span-9 ">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/issue" element={<IssuePage />} />
                            <Route path="/login" element={<LoginComponent />} />
                            <Route path="/register" element={<Register />} />

                        </Routes>
                    </div>
                </div>
        
            </>
        </React.Fragment>
    )
}