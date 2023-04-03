import React from "react"

export const Button = (props) => {
    return (
        <button className={`${props.css} bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none `}> {props.name}</button>
    )
}

export const Input = (props) => {
    return (
        <input type={props.type} className={`${props.css} appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none `} placeholder={props.placeholder} />
    )
}

export const ActionButton = (props) => {
    return (
        <button onClick={props.action} className={`${props.css} rounded-md px-3  text-blue-900 hover:bg-blue-600 hover:text-white transition-all py-1 bg-blue-300`}> {props.name}</button>
    )
}


export const ChipsSmall = (props) => {
    return (
        <React.Fragment>
            <span className={`rounded-2xl py-[1px] text-white  bg-${props.color}-500 px-2 m-1 text-sm `}>
                {props.name} 
            </span>
        </React.Fragment>
    )
}