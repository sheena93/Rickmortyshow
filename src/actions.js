import axios from 'axios';
import { ALL_DATA_FROM_API } from "./constant"

/**
 * @function getData
 *  Action Creator Function to get the data
 *  which dipatch actions and return action type and data
 * @returns {object} contains action type and data
 */

export const getData = () => {
    return (dispatch) => {
       axios.get("https://rickandmortyapi.com/api/character/").then(response  => {
            dispatch({
                type: ALL_DATA_FROM_API,
                data: response.data ? response.data.results : []
            })
        }).catch(error => {
            throw(error);
          });
    }
}