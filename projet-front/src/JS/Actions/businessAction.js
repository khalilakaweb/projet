import axios from "axios";
import { CLEAR_ERRORS_BUSINESS, CLEAR_SUCCESS_BUSINESS, GET_BUSINESS_FAIL, GET_BUSINESS_LOAD, GET_BUSINESS_SUCCESS } from "../ActionTypes/businessActiotypes";


export  const getallbusiness = () => async (dispatch) => {
    dispatch({type : GET_BUSINESS_LOAD});
    try {
        const result = await axios.get("/api/projet/get-all-business-project");
        dispatch({type : GET_BUSINESS_SUCCESS, payload : result.data});
    }
    catch (error) {
        dispatch({type : GET_BUSINESS_FAIL, payload : error.message});
    }
};
export  const getbusinessbyid = (id) => async (dispatch) => {
    dispatch({type : GET_BUSINESS_LOAD});
    try {
        const result = await axios.get(`/api/projet/get-business-projects/${id}`);
        dispatch({type : GET_BUSINESS_SUCCESS, payload : result.data});
    }
    catch (error) {
        dispatch({type : GET_BUSINESS_FAIL, payload : error.message});
    }
};

export  const addbusiness = (newbusiness) => async (dispatch) => {
    dispatch({type : GET_BUSINESS_LOAD});
    try {
        const result = await axios.post("/api/projet/add-business-projects", newbusiness);
        dispatch({type : GET_BUSINESS_SUCCESS, payload : result.data});
    }
    catch (error) {
        dispatch({type : GET_BUSINESS_FAIL, payload : error.message});
    }
};

export  const deletebusiness = (id) => async (dispatch) => {
    dispatch({type : GET_BUSINESS_LOAD});
    try {
        const result = await axios.delete(`/api/projet/delet-business-projects/${id}`);
        dispatch({type : GET_BUSINESS_SUCCESS, payload : result.data});
    }
    catch (error) {
        dispatch({type : GET_BUSINESS_FAIL, payload : error.message});
    }
};

export  const updatebusiness = (id, updatedbusiness) => async (dispatch) => {
    dispatch({type : GET_BUSINESS_LOAD});
    try {
        const result = await axios.put(`/api/projet/update-business-projects/${id}`, updatedbusiness);
        dispatch({type : GET_BUSINESS_SUCCESS, payload : result.data});
    }
    catch (error) {
        dispatch({type : GET_BUSINESS_FAIL, payload : error.message});
    }
};
export const clearSuccessbusiness = () => {
  return {
    type: CLEAR_SUCCESS_BUSINESS,
  };
};

export const clearErrorsbusiness = () => {
  return {
    type: CLEAR_ERRORS_BUSINESS,
  };
};