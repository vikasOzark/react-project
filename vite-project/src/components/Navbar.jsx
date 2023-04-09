import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    const actions = [
        {
            action_name : 'Home',
            link : '/'
        },
        {
            action_name : 'Login',
            link : 'login'
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
                        
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}