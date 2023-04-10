import React, { useEffect, useState } from "react";
import { ActionButton } from "../assets/Utility";
// import { Multiselect } from 'react-widgets'
import "../index.css";

export const IssuePage = () => {
  const [isDrop, setDrop] = useState(false);
  const [Assign, setAssign] = useState(false);
  const [selected, setSelected] = useState([])


  const clickHandle = (e) => {
    setSelected([...selected, e.target.innerText])
    console.log( selected)
    // selected()
  }

  return (
    <React.Fragment>
      <div className="mt-5 bg-white p-3 rounded ">
        <div className=" flex gap-3">
          <input 
            type="text"
            placeholder="Add title . . ."
            className="border-2 border-blue-400 rounded w-full p-1"
            value={selected}
          />
          
        </div>

        <div className="flex gap-2 mt- ">
          <div className="flex gap-2 mt-2 ">
            <div className="">
              <div className="mt-1">
                { <BTN name="Assign +" css='bg-green-300' clickFunc={() => {setDrop(!isDrop);setAssign(false)}} /> }
              </div>
              {isDrop && <DropDown oprionCLick={clickHandle} options={['vikas', 'test']} selected={[...selected]}  />}
            </div>

            <div className="">
              <div className="mt-1">
                <div
                  onClick={() => {
                    setAssign(!Assign);
                    setDrop(false);
                  }}
                  className=" px-4 py-1 rounded-2xl text-center cursor-pointer text-white bg-indigo-500"
                >
                  Assign task +
                </div>
              </div>
              {Assign && <DropDown options={['vikas', 'test']} selected={selected}  />}
            </div>
          </div>
        </div>

        <div className="border bg-white h-72 rounded-md p-2 mt-3 ">
          <textarea
            placeholder="Write something . . . "
            cols=""
            className="border-2 p-2 border-blue-400 h-fit w-full rounded-md  -md bg-gray-100"
          ></textarea>
          <div className="mt-1  gap-4">
            <button className="bg-red-300 px-4 py-1 rounded text-white mt-2">
              Create issue
            </button>
            <button className=" px-4 py-1 rounded-md mx-3 text-center cursor-pointer text-white bg-slate-600">
              Save draft
            </button>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
};



export const DropDown = (props) => {
  return (
    <div className="absolute shadow-lg border bg-white mt-2 p-2 w-auto rounded ">
      
      {props.options.map((option, index1) => (
        <span key={index1}>
          {props.selected.some(select => select === option) ? (
            <div onClick={props.oprionCLick} className="hover:bg-indigo-700 bg-indigo-500 text-white cursor-pointer font-semibold rounded w-[16rem] mb-1 p-1">
              {option}
            </div> 
          ) : (
            <div onClick={props.oprionCLick} className="hover:bg-gray-100 cursor-pointer font-semibold rounded w-[16rem] mb-1 p-1">
              {option}
            </div>
          )}
        </span>
      ))}
      
    </div>
  );
};




export const BTN = (props) => {
  return (
    <div
    onClick={props.clickFunc}
      className={` px-4 py-1 rounded-2xl text-center cursor-pointer text-white ${props.css} `}>
      {props.name}
    </div>
  )
}

