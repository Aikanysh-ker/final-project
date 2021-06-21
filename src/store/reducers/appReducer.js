import { FETCH_START, FETCH_END } from "../actions/types";

const initialState = {
  loading: false,
};
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
