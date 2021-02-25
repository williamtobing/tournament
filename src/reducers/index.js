import { combineReducers } from "redux";

import { navButtonReducer } from "./navButton";
import { scrolledReducer } from "./scrollerd";

const allReducers = combineReducers({
  nav: navButtonReducer,
  scrolled: scrolledReducer,
});

export default allReducers;
