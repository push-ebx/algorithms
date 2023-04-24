import { configureStore } from "@reduxjs/toolkit";

import themeReducer from 'entities/theme/themeSlice'
import offCanvasReducer from 'shared/ui/customOffCanvas/customOffCanvasSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    offCanvas: offCanvasReducer
  },
})