import {combineReducers} from "redux";
import {ALL_DATA_FROM_API} from "./constant";

/**
 * @function getData
 * This reducer function which updates state based on action type
 * @param {object} state contains reducer state only. Default is initial state
 * if no state provided.
 * @param {object} action contains action object
 * @returns {object} contains modified reducer state
 */

function getData(state = [], action){
    switch(action.type){
        case ALL_DATA_FROM_API:
            return {
                ...state,
                data:  action.data
            }
        default:
            return state
    }
}

export const finalReducer = combineReducers({getData});
