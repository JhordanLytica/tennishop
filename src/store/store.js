import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../Container/Table/slice'
import optionSlice  from '../Container/Add/slice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    options: optionSlice,
  },
})