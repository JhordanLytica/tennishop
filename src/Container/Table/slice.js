import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productsList: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.productsList = action.payload;
    },
    serchProduct: (state, action) => {
      state.productsList = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getProduct, serchProduct } = productSlice.actions

export default productSlice.reducer