import React from "react"
import { RequireAuth } from 'react-auth-kit'
import { Route, Routes } from 'react-router-dom'
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
                            <Route path="/" element={
                                 <RequireAuth loginPath={'/login'}>
                                    <Home />
                                </RequireAuth>
                            } />
                            <Route path="/issue/:id" element={
                                <RequireAuth loginPath={'/login'}>
                                    <IssuePage />
                                </RequireAuth>
                                }/>

                            <Route path="/issue" element={
                                <RequireAuth loginPath={'/login'}>
                                    <IssuePage />
                                </RequireAuth>
                                }/>
                                
                            <Route path="/login" element={<LoginComponent />}/>
                            <Route path="/register" element={<Register />}/>
                        </Routes>
                    </div>
                </div>
        
            </>
        </React.Fragment>
    )
}