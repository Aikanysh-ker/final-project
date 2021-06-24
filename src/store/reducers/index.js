import { combineReducers } from "redux";
import appReducer from "./appReducer";
import mentorsReducer from "./mentorsReducer";
import skillsReducer from '../reducers/skillsReducer'

export default combineReducers({
  mentors: mentorsReducer,
  skills:skillsReducer,
  app: appReducer,
});
