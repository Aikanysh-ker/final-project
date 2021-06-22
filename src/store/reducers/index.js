import { combineReducers } from "redux";
import appReducer from "./appReducer";
import mentorsReducer from "./mentorsReducer";

export default combineReducers({
  mentors: mentorsReducer,
  skills:skillsReducer,
  app: appReducer,
});
