import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useIsAuthenticated, useSignOut } from 'react-auth-kit'

export const Navbar = () => {
    const isAuthenticated = useIsAuthenticated()
    const signOut = useSignOut()
    const navigate = useNavigate();
    
    const actions = [
        {
            action_name : 'Home',
            link : '/'
        },


    ]
    return (
        <React.Fragment>
            <div className="">
                <div className="pb-2 top-0 ">
                    <div className="text-white p-2 mb-3 text-center">
                        vikas
                    </div>
                    <div className="">
                        {
                            actions.map((element) => (
                                <Link to={`${element.link}`}>
                                    <div className="m-1 mb-2 rounded text-white font-extrabold p-2 hover:bg-violet-900 bg-gradient-to-tr from-indigo-500 to-purple-700 -lg transition-all" >
                                        {element.action_name}
                                    </div>
                                </Link>
                                
                            ))
                        }
                        {
                            isAuthenticated()? <Link onClick={() => signOut()}>
                            <div className="m-1 mb-2 rounded text-white font-extrabold p-2 hover:bg-violet-900 bg-gray-400 transition-all" >
                                Logout
                            </div>
                        </Link> : <Link to='/login'>
                            <div className="m-1 mb-2 rounded text-white font-extrabold p-2 hover:bg-violet-900 bg-gradient-to-tr from-indigo-500 to-purple-700 -lg transition-all" >
                                Login
                            </div>
                        </Link>
                        }
                        
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}