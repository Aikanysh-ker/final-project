import { SET_MENTORS } from "../actions/types";

const initialState = {
  mentors: [],
};
export default function mentorsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENTORS:
      return {
        ...state,
        mentors: action.payload,
      };
    default:
      return state;
  }
}
