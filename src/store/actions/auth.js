import AuthService from "../../services/authService";

export const LOGIN = "LOGIN";

export const login = (params, history) => async (dispatch) => {
  try {
    const data = await AuthService.login(params);
    console.log(data);

    dispatch({ type: LOGIN, payload: data });
    history.push("/");
  } catch (err) {
    console.log(err.message);
  }
};
