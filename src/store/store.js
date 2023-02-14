import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
  users: userReducer,
});

const store = createStore(reducers);
export default store;
