import React from 'react'

function Task({task}) {
  return (
    <div className='task-line'>
        <h3>{task.title}</h3>
        <button style={{width:"50px",height:"45px"}}>Update</button>
        <button style={{width:"50px",height:"45px"}}>Delete</button>
    </div>
  )
}

export default Task