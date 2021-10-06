import data from "../../components/api/apidata";
import * as actionTypes from "./actionTypes"

export function getProjectSuccess(product) {
    return {
        type: actionTypes.DB_PROJECT,
        payload: product
    }
};

export function getDataSuccess(product) {
    return {
        type: actionTypes.DB_DATA,
        payload: product
    }
};



export function addDataBase(dbItem) {
    return {
        type: actionTypes.ADD_DB,
        payload: dbItem
    }

}

export const loadingFetchRequest = () => {
    return {
        type: actionTypes.LOADING_REQUEST
    }
}

export const currentWebsocketStatus = (status) => {
    console.log(status)
    return{
        type: actionTypes.WEBSOCKET_STATUS,
        payload: status
    }
}


export function getProject() {
    return function (dispatch) {
        dispatch(loadingFetchRequest)
        return data.get(`/projects`)
            .then(res => res.data.data)
            .then(result => dispatch(getProjectSuccess(result)))
            .catch(error => {
                console.log(error)
            });
    }
}

export function getData() {
    return function (dispatch) {
        return data.get(`/user/info`)
            .then(res => res.data.data)
            .then(result => dispatch(getDataSuccess(result)))
            .catch(error => {
                console.log(error)
            });
    }

}