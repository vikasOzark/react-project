import { Button, Input } from "../assets/Utility"
import { Link } from "react-router-dom"
import React, { useState } from "react"
import axios from 'axios'

export const LoginComponent = () => {

    const api_call = () => {

        const api_response = axios.get('http://127.0.0.1:8000/api/auth/register/').then((res) => (
            console.log(res)
        ))
    }
    
    return (
        <div className="flex flex-col items-center justify-center rounded-lg min-h-screen">
          <div className="bg-white shadow-2xl border border-blue-400 rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                <Link to='/register'>Don't have a account </Link>
              </a>
            </div>
          </div>
        </div>
      );
}


export const Register = () => {

    const [formData, setformData] = useState({})


    const handleChange = (event) => {
        setformData(
            {...formData,[ event.target.name] : event.target.value }
        )
        console.log(formData)
    }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" onChange={handleChange} name="remember" value="true" />
          <div className="rounded-lg border border-blue-400 shadow-2xl p-8 bg-white">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input id="name" onChange={handleChange} name="name" type="text" autoComplete="name" required className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email address</label>
              <input id="email" onChange={handleChange} name="email" type="email" autoComplete="email" required className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input id="password" onChange={handleChange} name="password" type="password" autoComplete="current-password" required className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="password-confirm" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
              <input id="password-confirm" onChange={handleChange} name="password-confirm" type="password" autoComplete="current-password" required className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
              <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Create account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

