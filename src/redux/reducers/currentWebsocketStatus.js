import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

const socketStatus = (state = initialState.wbStatus, action) => {
    switch (action.type) {
        case actionTypes.WEBSOCKET_STATUS:
            return action.payload;
        default:
            return state;
    }
};

export default socketStatus;