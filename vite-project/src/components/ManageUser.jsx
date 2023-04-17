import { useEffect, useState } from "react"
import axios from 'axios'
import { baseUrl } from "../assets/Urls";


export const ManageUser = () => {
    const [searchValue, setSeaarchValue] = useState({});
    const [searchList, setSearchlist] = useState([[]]);
    const [members, setMembers] = useState({});

    useEffect(() => {
        
    }, [])
    
    useEffect(() => {
        axios.get(`${baseUrl}/members/`, {params: {...searchValue}} ).then((res) => {
            setSearchlist(res.data.data)
            console.log('sdsd ',searchList);
            })
    }, [searchValue])
    
    
    return (
        <div className="text-white md:mx-10 md:mt-10">
            <div className="grid grid-cols-2 gap-4">
                <div className=" text-white p-2">
                    <div className="">

                        <form>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <input onChange={(e) => setSeaarchValue({...searchValue, 'search':e.target.value})} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search member . . ." required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>

                    </div>


                    <ol className="space-y-4 w-72 mt-5">
                        {
                            searchList.map((item, index) => {
                                return (

                                    <MemberCard key={index} name={item.first_name} id={item.username} />
                                )
                            })
                        }
                        
                    </ol>

                </div>
                <div className="">

                    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">My Team members</h5>
                            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                
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
                    <div className="">
                        <h3 className="font-medium">{name}</h3>
                        <span className="">ID : {id}</span>
                    </div>
                    {/* <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </div>
            </div>
        </li>
    )
}

export const MemberListCard = (props) => {
    const {name, email, image} = props
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src="{image}" alt="Bonnie image" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {email}
                    </p>
                </div>
            </div>
        </li>
    )
}