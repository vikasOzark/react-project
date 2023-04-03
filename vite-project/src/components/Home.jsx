import React from 'react'
import { ActionButton  ,ChipsSmall } from '../assets/Utility'
import { Link } from 'react-router-dom'

export const Tags = [
    {
        tag_name : 'feature',
        color : 'blue',
    },
    {
        tag_name : 'feature',
        color : 'blue',
    },

]

export const IssiePageNaviagte = () => {
        return {
            
        }
    }


export const Home = () => {
    return (
        <>
            <div className="mt-2 cursor-pointer">
                Home / Issue
            </div>
            <div className="bg-white p-2 shadow-lg mt-2 flex justify-between rounded-md items-center ">
                <div className="">
                    <ul className="flex gap-4">
                        <li className="">
                            <Chips name='Open' status='9' />
                        </li>
                        <li className="">
                            <Chips name='Close' status='9' />
                        </li>
                        <li className="">
                            <Chips name='All' status='9' />
                        </li>
                    </ul>
                </div>
                <div className=" flex gap-3">
                    <button className="border border-blue-600 text-blue-600 rounded-md px-3 shadow hover:bg-blue-500 hover:text-white transition-all py-1">Edit Issue /-</button>
                    <ActionButton name='Create issue +'  action={'/issue'} css='' />
                    <Link to={'/issue'}>
                        <ActionButton name='Create issue +'  css='' />
                    </Link>
                </div>
            </div>
            <div className="bg-white text-center mt-2 rounded-md p-2 shadow-md ">
                <div className="">
                    <input className="border px-2 py-1 rounded-md" placeholder="Search isses ..." type="text" />
                    <ActionButton name='Search issue' css='mx-2' />
                </div>
            </div>

            <div className="mt-2">
                <IssueCard title='Login page create for authentication'
                    auther='vikas'
                    issueID='1189'
                    days='3'
                    daysUpdate='1'
                    tags = {Tags}
                />
            </div>
            
        </>
    )
}

export const Chips = (props) => {
    return (
        <div className="border rounded-md px-2 cursor-pointer hover:bg-gray-200">
            {props.name} <span className="px-3 m-1 rounded-2xl text-gray-500 bg-white transition-all ">{props.status}</span>
        </div>
    )
}

export const IssueCard = (props) => {
    return (
        <React.Fragment >
            <div className="flex rounded-md shadow-lg p-2 bg-white justify-between items-center">
                <div className="">
                    <h2 className='font-bold text-gray-600'>{props.title}</h2>
                    <p className='text-gray-500 text-sm'>#{props.issueID} - <span className=''>created {props.days} days ago by <span className='text-blue-500 cursor-pointer'>{props.auther}</span></span>
                        {
                            props.tags.map((tag) => {
                                return (
                                    <ChipsSmall color={tag.color} name={tag.tag_name} />
                                )
                            })
                        }
                    </p>
                </div>
                <div className="text-gray-400 text-sm">
                    <p>updated {props.daysUpdate} day ago</p>
                </div>
            </div>
        </React.Fragment>
    )
}


