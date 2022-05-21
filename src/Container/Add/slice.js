import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  stock: [],
  marck: [],
  edithProduct: {},
}

export const optionSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    getStock: (state, action) => {
      state.stock = action.payload;
    },
    getMarck: (state, action) => {
      state.marck = action.payload;
    },
    getEdithProduct: (state, action) => {
      state.edithProduct = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getCategories, getStock, getMarck, getEdithProduct } = optionSlice.actions

export default optionSlice.reducer