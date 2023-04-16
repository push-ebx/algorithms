import { configureStore } from "@reduxjs/toolkit";

import themeReducer from 'entities/theme/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})