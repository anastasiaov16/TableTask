import { combineReducers } from "redux";
import { dataReducer } from "./reducer";

export const rootReducer = combineReducers({
  data:dataReducer
});
