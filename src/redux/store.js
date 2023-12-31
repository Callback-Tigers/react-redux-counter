import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";


const rootReducer = combineReducers(
    {
       counter : counterReducer,
       todo : todoReducer

    }
)
const store = createStore(rootReducer)

export default store