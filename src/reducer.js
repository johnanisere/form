import { combineReducers } from "redux";

import opportunity from "./compositions/Opportunity.reducer";
import backgroundAndSkill from "./compositions/BackgroundAndSkill.reducer";

export default combineReducers({
  opportunity,
  backgroundAndSkill
});
