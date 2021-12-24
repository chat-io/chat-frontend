import { LOGIN, SIGN_UP, LOGOUT } from "../actions/auth";

const initialState = {
  user: {},
  token: "",
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.data.login.user,
        token: payload.data.login.token,
        isLoggedIn: true,
      };

    case SIGN_UP:
      return {
        ...state,
        user: payload.data.signup.user,
        token: payload.data.signup.token,
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
