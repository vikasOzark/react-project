import React, { useEffect, useState } from "react";
import { ActionButton } from "../assets/Utility";
// import { Multiselect } from 'react-widgets'
import "../index.css";

export const IssuePage = () => {
  const [isDrop, setDrop] = useState(false);
  const [Assign, setAssign] = useState(false);

  return (
    <React.Fragment>
      <div className="mt-5 bg-white p-3 rounded ">
        <div className=" flex gap-3">
          <input
            type="text"
            className="border-2 border-blue-400 rounded w-5/6 p-1"
          />
          <ActionButton
            name="Add title"
            css="bg-green-400 text-white py-1 px-4"
          />
        </div>

        <div className="flex gap-2 mt- ">
          <div className="flex gap-2 mt-2 ">
            <div className="">
              <div className="mt-1">
                <div
                  onClick={() => {
                    setDrop(!isDrop);
                    setAssign(false);
                  }}
                  className=" px-4 py-1 rounded-2xl text-center cursor-pointer text-white bg-slate-600"
                >
                  Add tags +
                </div>
              </div>
              {isDrop && <DropDown />}
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
              {Assign && <DropDown />}
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

export const DropDown = () => {
  return (
    <div className="absolute bg-sky-400 mt-2 p-2 w-auto rounded  -lg">
      <div className="border cursor-pointer rounded bg-white w-[16rem] mb-1 p-1">
        test{" "}
      </div>
      <div className="border cursor-pointer rounded bg-white w-[16rem] mb-1 p-1">
        test{" "}
      </div>
      <div className="border cursor-pointer rounded bg-white w-[16rem] mb-1 p-1">
        test{" "}
      </div>
      <div className="border cursor-pointer rounded bg-white w-[16rem] mb-1 p-1">
        test{" "}
      </div>
    </div>
  );
};
