import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  type: "all",
  search: "",
};
const transactionFilterSlice = createSlice({
  name: "transactionFilterSlice",
  initialState,
  reducers: {
    typeSelected: (state, action) => {
      state.type = action.payload;
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});
export default transactionFilterSlice.reducer;
export const { typeSelected, searched } = transactionFilterSlice.actions;
