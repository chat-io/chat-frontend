import AuthService from "../../services/authService";

export const LOGIN = "LOGIN";
export const SIGN_UP = "SIGN_UP";
export const LOGOUT = "LOGOUT";

export const login = (params, history) => async (dispatch) => {
  try {
    const data = await AuthService.login(params);

    dispatch({ type: LOGIN, payload: data });
    history.push("/");
  } catch (err) {
    console.log(err.message);
  }
};

export const signup = (params, history) => async (dispatch) => {
  try {
    const data = await AuthService.signup(params);

    dispatch({ type: SIGN_UP, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({ type: LOGOUT });
};
