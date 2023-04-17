import React, { useState } from 'react'
import { addTask } from '../JS/taskSlice';
import { useDispatch } from 'react-redux';

function AddTask() {

    const [newTask, setNewTask] = useState({title:""});
    const dispatch = useDispatch()
  return (
    <div className='add-task'>
        <input type='text' placeholder='Add ToDo' onChange={(e)=>setNewTask({...newTask,title:e.target.value})}/>
        <button onClick={()=>dispatch(addTask({...newTask,id:Math.floor(Math.random()*10000000000000),isDone:false}))}>
            Add
        </button>
    </div>
  )
}

export default AddTask