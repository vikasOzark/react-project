import React, { useEffect, useState } from "react"
import { ActionButton } from "../assets/Utility"



export const IssuePage = () => {
    const [isDrop, setDrop] = useState(false)

    
    return (
        <React.Fragment>
            <div className="mt-5 bg-white p-3 rounded">
                <div className=" flex gap-3">
                    <input type="text" onClick={() => {setDrop(!isDrop)}}  className="border rounded w-5/6 p-1"/>
                    <ActionButton name='Add title' css='bg-green-400 text-white py-1 px-4' />
                </div>

            <div className="flex gap-2 mt-2 ">
                <div className="border relative rounded bg-white p-2">
                    <div className="">
                        <input type="text" className="border rounded px-2" placeholder="tags" />
                        {
                           isDrop && ( <DropDown />)
                        }
                    </div>
                    <div className="mt-1">
                        <div className="border px-1 rounded-2xl text-center text-white bg-blue-300">feature</div>
                    </div>
                </div>
                <button onClick={() => {setDrop(!isDrop)}} >fdfdfd</button>
                
            </div>
            </div>

            
        </React.Fragment>

    )
}


export const DropDown = () => {
    return (
        <div className="absolute bg-white mt-2 p-1 w-auto rounded shadow-lg">
            <div className="border rounded bg-blue-200 w-[16rem] mb-1 p-1">test </div>
            <div className="border rounded bg-blue-200 w-[16rem] mb-1 p-1">test </div>
            <div className="border rounded bg-blue-200 w-[16rem] mb-1 p-1">test </div>
            <div className="border rounded bg-blue-200 w-[16rem] mb-1 p-1">test </div>
        </div>
    )
}