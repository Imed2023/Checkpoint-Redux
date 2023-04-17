import { createSlice } from '@reduxjs/toolkit'

const initialState = [{id:1,title:"Task 1",isDone:false},{id:2,title:"Task 2",isDone:false},{id:3,title:"Task 3",isDone:false}]

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask:(state,action)=>{
        state=state.push(action.payload)
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { addTask } = taskSlice.actions

export default taskSlice.reducer