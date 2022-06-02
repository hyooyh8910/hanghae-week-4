import { createStore, combineReducers } from "redux";
import words from "./module/words";

//reducer들 묶어주는 문법
const rootReducer = combineReducers({words});

const store = createStore(rootReducer);

export default store;