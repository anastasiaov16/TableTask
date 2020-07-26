import { sortTableOnId, addData } from "./action";
import { initialState } from "./initialState";

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case addData:
      return { ...state, data: action.payload };

    case sortTableOnId:
      return {
        ...state,
        data: state.data.sort((a, b) => a.id - b.id)
      };

    default:
      return state;
  }
};
