import React, { useEffect, useState } from "react"
import { ActionButton } from "../assets/Utility"
import { Multiselect } from 'react-widgets' 
import '../index.css'



export const IssuePage = () => {
    const [isDrop, setDrop] = useState(false)

    return (
        <React.Fragment>
            <div className="mt-5 bg-white p-3 rounded">
                <div className=" flex gap-3">
                    <input type="text"  className="border rounded w-5/6 p-1"/>
                    <ActionButton name='Add title' css='bg-green-400 text-white py-1 px-4' />
                </div>

                <div className="flex gap-2 mt-2 ">
                    <div className="">
                        
                    <Multiselect
                        className="dropdown p-2 rounded-md shadow-lg w-[10rem]"
                        listProps={'bg-red-400'}
                        listClassName='bg-red-600'
                        messages='not '
                        defaultValue={['Add tags']}
                            data={[
                            'orange',
                            'red',
                            'blue',
                            'purple'
                            ]}
                        />
                        
                    </div>
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