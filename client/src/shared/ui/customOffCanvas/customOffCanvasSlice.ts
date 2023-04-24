import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const offCanvasSlice = createSlice({
  name: 'offCanvas',
  initialState,
  reducers: {
    setShowOffCanvas: (state, action) => action.payload,
  },
})

export const { setShowOffCanvas } = offCanvasSlice.actions

export default offCanvasSlice.reducer