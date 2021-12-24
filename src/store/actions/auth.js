import AuthService from "../../services/authService";

export const LOGIN = "LOGIN";

export const login = (params) => async (dispatch) => {
  try {
    const data = await AuthService.login(params);
    console.log(data);

    return dispatch({ type: LOGIN, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
