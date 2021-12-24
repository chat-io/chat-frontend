import { LOGIN, SIGN_UP } from "../actions/auth";

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
    default: {
      return state;
    }
  }
};

export default authReducer;
