import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCESS,
  LOAD_USER_FAIL,
  LOAD_USER_SUCESS,
  LOAD_USER_REQUEST,
  CLEAR_ERRORS,
  LOGOUT_USER_SUCESS,
  LOGOUT_USER_FAIL,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_RESET

} from "../constants/UserConstant";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCESS:
    case REGISTER_USER_SUCESS:
    case LOAD_USER_SUCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };


      case LOAD_USER_FAIL:
        return{
      
          loading: false,
          isAuthenticated: false,
          user: null,
          error: action.payload,

        }


    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case LOGOUT_USER_SUCESS:
      return {
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case LOGOUT_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};


export const profileReducer = (state = { }, action) => {
  switch (action.type) {
case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,

      };
    case UPDATE_PROFILE_SUCCESS:
  
      return {
        ...state,
        loading: false,
        isupdated: action.payload,
      };

    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case UPDATE_PROFILE_RESET:
        return{
          ...state,
          isupdated:false
        }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
