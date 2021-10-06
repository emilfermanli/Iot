import { combineReducers } from "redux";
import projectReducer from "./allProject"
import dataReducer from "./allData"
import socketStatus from "./currentWebsocketStatus"


const reducers = combineReducers({
    dataReducer,
    projectReducer,
    socketStatus
});

export default reducers;