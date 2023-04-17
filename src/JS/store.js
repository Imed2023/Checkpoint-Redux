import { configureStore } from '@reduxjs/toolkit'
import taskreducer from "./taskSlice"

export const store = configureStore({
  reducer: {task:taskreducer},
})