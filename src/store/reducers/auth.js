import { LOGIN } from "../actions/auth";

const initialState = {
  user: {},
  token: "",
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  console.log("payload");
  if (payload) {
    console.log(payload.data.login.user);
    // console.log(payload.user);
  }

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.data.login.user,
        token: payload.data.login.token,
        isLoggedIn: true,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
