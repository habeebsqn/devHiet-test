import { combineReducers } from "redux";
import filterSlice from "./filterSlice";
import dataSlice from "./dataSlice";
const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  data: dataSlice.reducer,
});

export default rootReducer;
