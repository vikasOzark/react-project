import React, { useEffect, useState } from 'react'
import { ActionButton  ,ChipsSmall } from '../assets/Utility'
import { Link } from 'react-router-dom'
import axios from "axios";
import { baseUrl } from '../assets/Urls';
import {useAuthUser} from 'react-auth-kit'
import moment from "moment";

export const Home = () => {
    const auth = useAuthUser()
    const [issueData, setIssueData] = useState([])
    
    useEffect(() => {
        axios.get(`${baseUrl}/issue-create/`, {params:{user:auth().username}}).then((res) => {
            setIssueData([...res.data.data])
            console.log('==<>>  ',res.data.data);


        })
        .catch((err) => console.log(err));
    }, [])
    
    return (
        <>
            <div className="mt-2 cursor-pointer">
                Home / Issue
            </div>
            <div className="bg-white p-2  -lg mt-2 flex justify-between rounded-md items-center ">
                <div className="">
                    <ul className="flex gap-4">
                        <li className="bg-">
                            <Chips name='Open' status='9' />
                        </li>
                        <li className="bg-">
                            <Chips name='Close' status='9' />
                        </li>
                        <li className="bg-">
                            <Chips name='All' status='9' />
                        </li>
                    </ul>
                </div>
                <div className=" flex gap-3">
                    <ActionButton name='Edit issue +'  css='bg-white border border-blue-500' />
                    <Link to={'/issue'}>
                        <ActionButton name='Create issue +'  css='' />
                    </Link>
                </div>
            </div>
            <div className="bg-white text-center mt-2 rounded-md p-2  -md ">
                <div className="">
                    <input className="border px-2 py-1 rounded-md" placeholder="Search isses ..." type="text" />
                    <ActionButton name='Search issue' css='mx-2' />
                </div>
            </div>

            <div className="mt-2">
                 
                 
                {issueData.map((item, index) => {
                    return (

                        <Link key={index} to={`/issue/${item.id}`}>
                            <IssueCard  
                            title={item.issue_title}
                            // auther={item.creator}
                            issueID={item.id}
                            days={item.created_at}
                            daysUpdate={item.modify_on}
                            tags = {item.tags}
                        />
                        </Link>
                        // <Link key={index} to={`/issue/${item.id}`}>
                        //     <IssueCard  
                        //     title={item.issue_title}
                        //     // auther={item.creator}
                        //     issueID={item.id}
                        //     days={item.created_at}
                        //     daysUpdate={item.modify_on}
                        //     tags = {item.tags}
                        // />
                        // </Link>
                    )
                })}
            </div>
        </>
    )
}

export const Chips = (props) => {
    return (
        <div className="border rounded-md px-2 cursor-pointer hover:bg-gray-200 bg-gray-100">
            {props.name} <span className="px-3 m-1 rounded-2xl text-gray-500 transition-all bg-gray-100">{props.status}</span>
        </div>
    )
}

export const IssueCard = (props) => {
    return (
        <React.Fragment >
            <div className="flex rounded-md mb-2 p-2 bg-white justify-between items-center">
                <div className="">
                    <h2 className='font-bold text-gray-600'>{props.title}</h2>
                    <p className='text-gray-500 text-sm'>#{props.issueID} - <span className=''>created {moment(`${props.days}`).fromNow()} days ago by <span className='text-blue-500 cursor-pointer'>{props.auther}</span></span>
                        {
                            props.tags.map((tag, index) => {
                                return (
                                    <ChipsSmall key={index} color={tag.color} name={tag.tag_name} />
                                )
                            })
                        }
                    </p>
                </div>
                <div className="text-gray-400 text-sm">
                    {/* <p format="DD/MM/YYYY">updated {props.daysUpdate} day ago</p> */}
                    <p>{moment(`${props.daysUpdate}`).fromNow()} day ago</p>
                </div>
            </div>
        </React.Fragment>
    )
}




