import axios from "axios";
import React, { useEffect, useState , useRef } from "react";
import { baseUrl } from "../assets/Urls";
import { ActionButton } from "../assets/Utility";
import "../index.css";
import {useAuthUser} from 'react-auth-kit'
import { useParams } from "react-router-dom";


export const IssuePage = () => {
  const initialData = {issue_title:'', issue_detail:''}
  
  const [isDrop, setDrop] = useState(false);
  const [Assign, setAssign] = useState(false);
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState([])
  const [textData, setTextData] = useState(initialData);
  const [person, setPerson] = useState(['Vikas', 'Mr. Kumar', 'New dev'])
  const [selectedPerson, setSelectedPerson] = useState([])
  const [newTagCreate, setNewTags] = useState('')
  const [isUpdate, setIsUpdate] = useState('')
  
  const auth = useAuthUser()
  const {id} = useParams()
  
  const clickHandlePerson = (e) => {
    if(selectedPerson.includes(e.target.innerText )){
      const newList = selectedPerson.filter((item) => item !== e.target.innerText);
      setSelectedPerson(newList)
    } else {
      setSelectedPerson([...selectedPerson, e.target.innerText])
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log(value);
    setTextData({...textData, [name]: value})
    console.log(textData.issue_detail);
    
  }

  const saveIssue = (e) => {
    // console.log(textData);
    const issueData = {
      id: isUpdate,
      issue_title: textData.issue_title,
      issue_detail: textData.issue_detail,
      tags: selectedTag,
      issue_status: 'OPEN',
      assigned_user: selectedPerson,
      saveType:e.target.name,
      user: auth().username
    }
    axios.post(`${baseUrl}/issue-create/`, issueData).then((res) => {
      console.log(res)
    })
  }

  const createTagList = (tagData) => {
    let arr = []
    tagData.forEach(element => {
      arr.push(element.title)
    });

    return arr
  }


  useEffect(() => {
    axios.get(`${baseUrl}/create-tag/`, {params:{user: auth().username}} ).then((res) => {
      setTags(res.data.data)
    })

    if(id){
      axios.get(`${baseUrl}/issue-create/`, {params:{id: id}} ).then((res) => {
  
        setTags(createTagList(res.data.data.tags))
        setSelectedTag(createTagList(res.data.data.tags))
        setTextData({...setTextData, 'issue_title':res.data.data.issue_title, 'issue_detail':res.data.data.issue_detail})
        
      })
      setIsUpdate(id)
      
    }

  }, []);


  const handleCreateTags = (e) => {
    setNewTags(e.target.value)
  }

  const createTags = () => {
    const tagData = {
      tagTitle : newTagCreate,
      user: auth().username 
    }
    axios.post(`${baseUrl}/create-tag/`, tagData).then((res) => {
      console.log(res)
      setTags([...tags, res.data.data])

    })

  }
  

  const clickHandleTags = (e) => {
    if(selectedTag.includes(e.target.innerText )){
      const newList = selectedTag.filter((item) => item !== e.target.innerText);
      setSelectedTag(newList)
    } else {
      setSelectedTag([...selectedTag, e.target.innerText])
    }
  }



  return (
    <React.Fragment >
      <div className=" p-3 h-screen rounded " >
        <div className=" flex gap-3">
          <input value={textData.issue_title} type="text" name="issue_title" onChange={handleChange} placeholder="Add title . . ." className="border border-white bg-transparent text-white rounded w-full p-1" />
        </div>

        <div className="flex gap-2">
          <div className="flex gap-2 mt-2 ">
            <div className="">
              <div className="mt-1">
                { <BTN name={`Add tags + (${selectedTag.length})`} css='bg-green-500' enterMouse={() => {setDrop(true)}}   /> }
              </div>
              {isDrop && <DropDown isInput={true} createTagsFunc={createTags} newTgasHandler={handleCreateTags} leaveMouse={() => {setDrop(false)}} oprionCLick={clickHandleTags} options={tags} selected={selectedTag}  />}
            </div>

            <div className="">
              <div className="mt-1">
                { <BTN name={`Assign task + (${selectedPerson.length})`} css='bg-blue-700' enterMouse={() => {setAssign(true)}} /> }
              </div>
              {Assign && <DropDown oprionCLick={clickHandlePerson} leaveMouse={() => {setAssign(false)}} options={person} selected={selectedPerson}  />}
            </div>
          </div>
          
        </div>
        <div className="borde  text-white rounded-md mt-3 ">
          <textarea
          value={textData.issue_detail}
            placeholder="Write something . . . "
            name="issue_detail" onChange={handleChange}
            className="border-2 p-2 border-purple-500 w-[100%] h-[50vh] rounded-md bg-transparent"></textarea>
          <div className="mt-1 flex  gap-4">
            <ActionButton btnActionType='save' action={saveIssue} name="Save now" />
            <ActionButton btnActionType='draft' action={saveIssue} name="save draft" css="bg-gray-300" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export const DropDown = (props) => {
  return (
    <div onMouseLeave={props.leaveMouse} className="absolute shadow-lg border transition-all duration-300 ease-in-out bg-white mt-2 p-2 w-auto rounded " >
      
      {
        props.options.map((option, index1) => (
          <div key={index1}>
            {props.selected.some(select => select === option) ? (
              <div onClick={props.oprionCLick} className="hover:bg-indigo-500 bg-indigo-400 text-white cursor-pointer font-semibold rounded w-[16rem] mb-1 p-1">
                {option}
              </div> 
            ) : (
              <div onClick={props.oprionCLick} className="hover:bg-gray-100 cursor-pointer font-semibold rounded w-[16rem] mb-1 p-1">
                {option}
              </div>
            )}
          </div>
        ))
      }

      {
        props.options.length === 0 ? 
        <div onClick={props.oprionCLick} className=" bg-red-300 text-white cursor-pointer font-semibold rounded w-[16rem] mb-1 p-1">
          Empty 
        </div> :
        <></>
      }
      
      {
        props.isInput? 
        <div className=" flex gap-2 w-full">
          <input type="text" onChange={props.newTgasHandler} className="w-[12em] text-black px-2 font-light  shadow-md rounded-md border" placeholder="create tag +"/>
          <button onClick={props.createTagsFunc} className="bg-green-300 px-2 rounded-md">
            Save
          </button>
        </div>
        : <></>
      }

    </div>
  );
};


export const BTN = (props) => {
  return (
    <div
      onMouseEnter={props.enterMouse}
      onMouseLeave={props.leaveMouse}
      onClick={props.clickFunc}
      className={` px-4 py-1 rounded-2xl text-center cursor-pointer text-white ${props.css} `}>
      {props.name}
    </div>
  )
}

