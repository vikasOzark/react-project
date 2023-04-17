import { useEffect, useState } from "react"
import axios from 'axios'
import { baseUrl } from "../assets/Urls";


export const ManageUser = () => {
    const [searchValue, setSeaarchValue] = useState({});
    const [searchList, setSearchlist] = useState({});
    const [members, setMembers] = useState({});
    console.log('sss',{...searchValue});

    useEffect(() => {
        axios.get(`${baseUrl}/members/`, {params: {...searchValue}} ).then((res) => {
            console.log('=====', res)
        })
    }, [searchValue])
    
    
    return (
        <div className="text-white md:mx-10 md:mt-10">
            <div className="grid grid-cols-2 gap-4">
                <div className=" text-white p-2">
                    <div className="">

                        <form>
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input onChange={(e) => setSeaarchValue({...searchValue, 'search':e.target.value})} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search member . . ." required />
                                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>

                    </div>


                    <ol class="space-y-4 w-72 mt-5">

                        <MemberCard name='viksd' id='4566' />
                        
                    </ol>

                </div>
                <div className="">

                    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex items-center justify-between mb-4">
                            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">My Team members</h5>
                            <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                        <div class="flow-root">
                            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                
                                <MemberListCard name='vikas' email='viksd@gamial.com' image='' />
                            
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export const MemberCard = (props) => {
    const {name, id, addFunction} = props
    return (
        <li onClick={addFunction}>
            <div className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400">
                <div className="flex items-center justify-between">
                    <div classNameName="">
                        <h3 className="font-medium">{name}</h3>
                        <span className="">ID : {id}</span>
                    </div>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </li>
    )
}

export const MemberListCard = (props) => {
    const {name, email, image} = props
    return (
        <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src="{image}" alt="Bonnie image" />
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {name}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {email}
                    </p>
                </div>
            </div>
        </li>
    )
}