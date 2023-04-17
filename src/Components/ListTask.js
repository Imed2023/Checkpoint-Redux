import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

function ListTask() {
    const tasks=useSelector((store)=>store.task)
   
  return (
    <div className='task-list'>
    {tasks.map((el,i)=><Task key={i} task={el}/>)}
        
    </div>
  )
}

export default ListTask