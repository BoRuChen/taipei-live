import {combineReducers} from "redux";
import {actionTypes} from "../actionTypes";

const dataReducer = (state ={},{type,payload}) => {
    switch (type){
        case actionTypes.GET_DATA:
            return{
                ...state,
                [payload.town]:payload.data
            }
        default:
            return state;
    }
}

export const reducer = combineReducers({
    dataReducer,
})