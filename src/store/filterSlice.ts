import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  searchParam: string;
}

const initialState: SearchState = {
  searchParam: "",
};

const filterSlice = createSlice({
  name: "filter",

  initialState: initialState,

  reducers: {
    onChangeSearchParam(currentState, actions) {
      currentState.searchParam = actions.payload;
    },
  },
});

export const filterSliceAction = filterSlice.actions;

export default filterSlice;
