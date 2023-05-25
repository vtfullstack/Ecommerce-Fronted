import axios from "axios";
import {
  LOGIN_SUCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCESS,
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_SUCESS,
  LOAD_USER_REQUEST,
  LOGOUT_USER_SUCESS,
  LOGOUT_USER_FAIL,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_RESET

} from "../constants/UserConstant";
// Login User
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "api/v1/login",
      { email, password },
      config
    );
    dispatch({ type: LOGIN_SUCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};
// Used to clear errrors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const register = (userdata) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("api/v1/register", userdata, config);
  
    dispatch({ type: REGISTER_USER_SUCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// LOAD USERS ie get user profile
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.get("api/v1/me", config);
    console.log("data--------",data.user)
    dispatch({ type: LOAD_USER_SUCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Logout USer
export const logoutUser = () => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    await axios.get("api/v1/logout", config);
    dispatch({ type: LOGOUT_USER_SUCESS });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};


// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(`/api/v1/me/update`, userData, config);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

