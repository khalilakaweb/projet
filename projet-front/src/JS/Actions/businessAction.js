import axios from "axios";
import { CLEAR_ERRORS_BUSINESS, CLEAR_SUCCESS_BUSINESS, GET_BUSINESS_FAIL, GET_BUSINESS_LOAD, GET_BUSINESS_SUCCESS } from "../ActionTypes/businessActiotypes";


export const getallbusiness = () => async (dispatch) => {
  dispatch({ type: GET_BUSINESS_LOAD });
  try {
    const result = await axios.get("/api/projet/get-all-business-projects");
    dispatch({
      type: GET_BUSINESS_SUCCESS,
      payload: {
        success: result.data?.success,
        business: result.data?.businessProjects || [],
      },
    });
  } catch (error) {
    dispatch({
      type: GET_BUSINESS_FAIL,
      payload: { errors: error.response?.data?.errors || [{ msg: error.message }] },
    });
  }
};
export const getbusinessbyid = (id) => async (dispatch) => {
  dispatch({ type: GET_BUSINESS_LOAD });
  try {
    const result = await axios.get(`/api/projet/get-business-project/${id}`);
    dispatch({
      type: GET_BUSINESS_SUCCESS,
      payload: {
        success: result.data?.success,
        business: result.data?.businessProject || null,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_BUSINESS_FAIL,
      payload: { errors: error.response?.data?.errors || [{ msg: error.message }] },
    });
  }
};

export const addbusiness = (newbusiness) => async (dispatch) => {
  dispatch({ type: GET_BUSINESS_LOAD });
  try {
    const token = localStorage.getItem("token");
    const result = await axios.post("/api/projet/add-business-project", newbusiness, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    dispatch({
      type: GET_BUSINESS_SUCCESS,
      payload: {
        success: result.data?.success,
        business: result.data?.business,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_BUSINESS_FAIL,
      payload: { errors: error.response?.data?.errors || [{ msg: error.message }] },
    });
  }
};

export const deletebusiness = (id) => async (dispatch) => {
  dispatch({ type: GET_BUSINESS_LOAD });
  try {
    const token = localStorage.getItem("token");
    const result = await axios.delete(`/api/projet/delete-business-project/${id}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    dispatch({
      type: GET_BUSINESS_SUCCESS,
      payload: {
        success: result.data?.success,
        business: result.data?.deletedBusinessProject,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_BUSINESS_FAIL,
      payload: { errors: error.response?.data?.errors || [{ msg: error.message }] },
    });
  }
};

export const updatebusiness = (id, updatedbusiness) => async (dispatch) => {
  dispatch({ type: GET_BUSINESS_LOAD });
  try {
    const token = localStorage.getItem("token");
    const result = await axios.put(`/api/projet/update-business-project/${id}`, updatedbusiness, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    dispatch({
      type: GET_BUSINESS_SUCCESS,
      payload: {
        success: result.data?.success,
        business: result.data?.updatedBusinessProject,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_BUSINESS_FAIL,
      payload: { errors: error.response?.data?.errors || [{ msg: error.message }] },
    });
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