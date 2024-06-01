import { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { addTask } from '../api';

function Task({ setPopUp, setisloading }) {
    const[title,setTitle] = useState('')
    const[desc,setDesc] = useState('')

  // Function to Add Task
  const addtask = async () => {
    try {
      await addTask({ Title: title,Desc: desc })
      setPopUp(false)
      setisloading(prevIsLoading => !prevIsLoading)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-screen h-screen bg-black bg-opacity-50 fixed top-0 right-0 flex justify-center items-center'>
      <div className='bg-white p-10 rounded-md shadow-md'>
        <IoMdCloseCircle className="float-end size-5 cursor-pointer" onClick={() => setPopUp(false)} />
        <h1 className='font-bold text-center text-lg my-5 text-black'>New Task</h1>
        <div className='flex flex-col gap-5'>
        {/* TITLE FOR TASK */}
        <input
          className='p-2 outline outline-1'
          placeholder='Enter Title'
          onChange={(e) => setTitle(e.target.value)}
          type="text" />
          {/* DESCRIPTION FOR TASK */}
        <textarea
          className='p-2 outline outline-1 h-24'
          placeholder='Description (Optional)'
          onChange={(e) => setDesc(e.target.value)}
          type="text" />
          </div>
          {/* BUTTON TO ADD TASK */}
        <div className='flex justify-center mt-5'>
          <button className='outline outline-1 outline-sky-950 bg-sky-950 text-white py-2 px-4 hover:bg-transparent hover:text-black'
            onClick={addtask}
          >ADD</button>
        </div>
      </div>
    </div>
  )
}

export default Task