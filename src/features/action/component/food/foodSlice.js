import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFoodToCart: (state, action) => {
      const item = JSON.parse(action.payload);
      item.count = 1;
      state.data.push(item);
    },
    
  },
});

export const { addFoodToCart } = foodSlice.actions;

export default foodSlice.reducer;
