import { ADD_BUSINESS_FAIL, ADD_BUSINESS_LOAD, ADD_BUSINESS_SUCCESS, CLEAR_ERRORS_BUSINESS, CLEAR_SUCCESS_BUSINESS, DELETE_BUSINESS_FAIL, DELETE_BUSINESS_LOAD, GET_BUSINESS_FAIL, GET_BUSINESS_LOAD, GET_BUSINESS_SUCCESS, GET_ONE_BUSINESS_FAIL, GET_ONE_BUSINESS_LOAD, GET_ONE_BUSINESS_SUCCESS, UPDATE_BUSINESS_FAIL, UPDATE_BUSINESS_LOAD, UPDATE_BUSINESS_SUCCESS } from "../ActionTypes/businessActiotypes";




const initialState = {
  load: false,
  success: null,
  errors: null,
  business: [],
};

const businessReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BUSINESS_LOAD:
      return { ...state, load: true };
    case GET_BUSINESS_SUCCESS:
      return { ...state, load: false,business: payload.business, success: payload.success };
    case GET_BUSINESS_FAIL:
      return { ...state, load: false, errors: payload.errors};

    case GET_ONE_BUSINESS_LOAD:
      return { ...state, load: true };
    case GET_ONE_BUSINESS_SUCCESS:
      return { ...state, load: false,business: payload.business, success: payload.success };
    case GET_ONE_BUSINESS_FAIL:
      return { ...state, load: false, errors: payload.errors};

    case ADD_BUSINESS_LOAD:
      return { ...state, load: true };
    case ADD_BUSINESS_SUCCESS:
      return { ...state, load: false,business: payload.business, success: payload.success };
    case ADD_BUSINESS_FAIL:
      return { ...state, load: false, errors: payload.errors};

    case DELETE_BUSINESS_LOAD:
      return { ...state, load: true };
    case DELETE_BUSINESS_SUCCESS:
      return { ...state, load: false,business: payload.business, success: payload.success };
    case DELETE_BUSINESS_FAIL:
      return { ...state, load: false, errors: payload.errors};

    case UPDATE_BUSINESS_LOAD:
      return { ...state, load: true };
    case UPDATE_BUSINESS_SUCCESS:
      return { ...state, load: false,business: payload.business, success: payload.success };
    case UPDATE_BUSINESS_FAIL:
      return { ...state, load: false, errors: payload.errors};



    case CLEAR_SUCCESS_BUSINESS:
      return { ...state, success: null };
    case CLEAR_ERRORS_BUSINESS:
      return { ...state, errors: null };



    default:
      return state;
  }
};

export default businessReducer;