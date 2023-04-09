import { Button, Input } from "../assets/Utility"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from 'axios'
import {baseUrl} from '../assets/Urls'
import { useSignIn } from 'react-auth-kit'

export const LoginComponent = () => {

    const initialValue = {username: '', password: ''}
    const [formData, setFormData] = useState(initialValue);
    const [formError, setFormError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const signIn = useSignIn()
    

    const handleChange = (e) => {
      const {name, value} = e.target
      console.log(name, value);
      setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormError(validateForm(formData))
      setIsSubmit(true)
    }

    useEffect(() => {
     if(Object.keys(formError).length === 0 && isSubmit){
      axios.post(`${baseUrl}/auth/login/`, formData).then((res) => {
        // if(res.data.status == 200){
        //   signIn({
        //     token: res.data.token,
        //     expiresIn:res.data.expiresIn,
        //     tokenType: "Token",
        //     authState: res.data.authUserState,
        //   })
        // }

        
      })
     }
      
    }, [formError])

    const validateForm = (values) => {
      console.log(values)
      const errors = {}
      if(!values.username){
        errors.username = 'Username is empty !'
      }
      
      if(!values.password){
        errors.password = 'Password is empty !'
      }
      console.log(errors);
      return errors
    }
    
    return (
        <div className="flex  flex-col items-center justify-center rounded-lg min-h-screen">
          <div className="bg-white   bg-gradient-to-b from-blue-400 to-purple-600  -xl transition duration-500 ease-in-out hover: -2xl w-[30em] rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  name="username"
                  autoComplete="username"
                  onChange={handleChange}
                  className="  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus: -outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
                <small className="text-red-500">{formError.username}</small>
              </div>
              <div className="mb-6">
                <label className="block text-white font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  autoComplete="password"
                  onChange={handleChange}
                  name="password"
                  className="  appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus: -outline"
                  id="password"
                  type="password"
                  placeholder="********"
                />
                <small className="text-red-500">{formError.password}</small>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-white hover:bg-blue-300 text-blue-700 font-bold py-1 px-4 rounded focus:outline-none focus: -outline"
                >
                  Sign In
                </button>
                  <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to='/register'>Don't have a account </Link>
              </div>
            </form>
          </div>
        </div>
      );
}


export const Register = () => {
  
    const intialValues = {
      first_name: '', email: '',
      username:'', password:'',
      re_password : ''
    }
    const [formData, setformData] = useState(intialValues)
    const [isSubmit, setIsSubmit] = useState(false)
    const [formError, setFormError] = useState({})
    const [resError, setResError] = useState({})
    
    const handleChange = (e) => {
      let {name, value} = e.target
      setformData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormError(validateForm(formData))
      setIsSubmit(true)
    }

    useEffect(() => {
      if (Object.keys(formError).length === 0 && isSubmit){
        axios.post(`${baseUrl}/auth/register/`, formData).then((res) => {
          if (res.data.status === 400){
            setResError(res.data.error)
          }
        })
      }
    }, [formError])

    const validateForm = (values) => {
      const errors = {}
      if (!values.first_name){
        errors.first_name = 'Name is required !'
      }
      if (!values.username){
        errors.username = 'Username is required !'
      }
      if (!values.email){
        errors.email = 'Email is required !'
      }
      if (!values.password){
        errors.password = 'Password is required !'
      } else if (values.password != values.re_password){
        errors.password = 'Your password not matched !'
      } else if (values.password.length < 6 ){
        errors.password = 'Your password shoud be more than 6 charators !'
      }

      return errors
    }

    

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 ">
        <div className="text-center  ">
          <h2 className="mt-6 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" onChange={handleChange} name="remember" value="true" />
          <div className="rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 to-violet-700  -xl p-8 bg-white">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
              <input id="name" onChange={handleChange} name="first_name" type="text" autoComplete="name" className="appearance-none border rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus: -outline" />
              <small className="text-red-800">{formError.first_name}</small>

            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-white font-bold mb-2">Username</label>
              <input id="username" onChange={handleChange} name="username" type="text" autoComplete="username" className="appearance-none border rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus: -outline" />
              <small className="text-red-800">{formError.username}</small>
              <small className="text-red-800">{resError.username}</small>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">Email address</label>
              <input id="email" onChange={handleChange} name="email" type="email" autoComplete="email" className="appearance-none border rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus: -outline" />
              <small className="text-red-800">{formError.email}</small>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white font-bold mb-2">Password</label>
              <input id="password" onChange={handleChange} name="password" type="password" autoComplete="current-password" className="appearance-none border rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus: -outline" />
              <small className="text-red-800">{formError.password}</small>
            </div>
            <div className="mb-4">
              <label htmlFor="re_password" className="block text-white font-bold mb-2">Confirm Password</label>
              <input id="re_password" onChange={handleChange} name="re_password" type="password" autoComplete="current-password" className="appearance-none border rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus: -outline" />
              <small className="text-red-800">{formError.re_password}</small>
            </div>
            <div>
              <button  className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus: -outline">Create account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

