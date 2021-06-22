import { SET_SKILLS } from "../actions/types";

const initialState = {
  skills: [],
};
export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SKILLS:
      return {
        ...state,
        skills: action.payload,
      };
    default:
      return state;
  }
}
