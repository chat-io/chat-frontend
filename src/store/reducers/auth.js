import { LOGIN, SIGN_UP, LOGOUT } from "../actions/auth";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  token: localStorage.getItem("token") || "",
  isLoggedIn: !!localStorage.getItem("user"),
  //isLoggedIn 설정하기 위해 token 검증과정이 필요하지 않은가?
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };

    case SIGN_UP:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        user: {},
        token: "",
        isLoggedIn: false,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
