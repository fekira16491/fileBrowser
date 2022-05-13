import { combineReducers } from "redux";
import userReducer from "./userReducers";
import loginReducer from "./loginReducer";
import commentReducer from "./commentReducer";
import videoReducer from "./videoReducer";


 /**
 * Root reducer to combine reducers
 */
const rootreducer = combineReducers({
  users: userReducer,
  login:loginReducer,
  comment:commentReducer,
  video:videoReducer
});

export default rootreducer;
