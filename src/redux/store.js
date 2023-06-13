import { createSlice, configureStore } from '@reduxjs/toolkit'
import calcsReducer from './calcs'

export default configureStore({
  reducer: {
    calcs: calcsReducer
  }
})