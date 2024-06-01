import React from 'react'
import { useState, useEffect } from 'react';
import { getTask } from './api';
import Navbar from './Components/Navbar';
import Card from './Components/Card'
import Task from './Components/Task'

function App() {
  const [popUp, setPopUp] = useState(false)
  const [task, setTask] = useState([])
  const [isloading, setisloading] = useState(false);

  useEffect(() => { gettask() }, [isloading])

  // Function to Get a List
  const gettask = async () => {
    try {
      const response = await getTask()
      setTask(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  return (

    <div className='bg-sky-950'>
      <Navbar/>
      <div className='min-h-screen mt-2 w-11/12 flex flex-row gap-9 mx-auto justify-around'>
        {/* PENDING SECTION */}
        <div className='bg-red-300 box-border w-3/4 rounded-lg p-5'>
          <div className='flex justify-between'>
            <h1 className=' w-3/4 text-center pl-20 text-red-950 text-4xl font-medium'>Pending</h1>
            <div className=' w-1/4 text-center mt-3 bg-sky-950 text-white rounded-md'>{task.filter(item=>item.Completed!==true && item.Progress!==true).length} Issues</div>
          </div>
          <Card task={task.filter(item=>item.Completed!==true && item.Progress!==true)} setisloading={setisloading}/>
          <button className='bg-sky-300 w-28 mt-5 h-12 text-xl rounded-md transition duration-300 hover:scale-105' onClick={() => setPopUp(true)}>Add Task</button>  
        {popUp && <Task setPopUp={setPopUp} setisloading={setisloading}/>}
        </div>
        {/* PROGRESS SECTION */}
        <div className='bg-yellow-300 box-border w-3/4  rounded-xl p-5'>
          <div className='flex justify-between'>
            <h1 className=' w-3/4 pl-8 ml-10 text-yellow-950 text-4xl font-medium text-center'>In Progress</h1>
            <div className=' w-1/4 text-center mt-3 bg-sky-950 text-white rounded-md'>{task.filter(item=>item.Completed!==true && item.Progress==true ).length} Issues</div>
          </div>
          <Card task={task.filter(item=>item.Completed!==true && item.Progress==true )} setisloading={setisloading}/>
        </div>
        {/* COMPLETED SECTION */}
        <div className='bg-green-400   box-border w-3/4  rounded-xl p-5'>
          <div className='text-green-950 text-4xl font-medium text-center'>
            Completed ✔
          </div>
          <Card task={task.filter(item=>item.Completed==true)} setisloading={setisloading}/>
        </div>
      </div>
    </div>

  )
}

export default App
