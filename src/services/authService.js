import Client from "./apollo-client";
import loginMutation from "./mutation/loginMutation";
import signupMutation from "./mutation/signupMutation";

const setHeadersAndStorage = ({ user, token }) => {
  //set header
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

const login = async ({ email, password }) => {
  let loginResponse = await Client.mutate({
    mutation: loginMutation(email, password),
  });

  loginResponse = loginResponse.data.login;

  setHeadersAndStorage(loginResponse);
  return loginResponse;
};

const signup = async (data) => {
  let signupResponse = await Client.mutate({
    mutation: signupMutation(data),
  });

  signupResponse = signupResponse.data.signup;
  setHeadersAndStorage(signupResponse);
  return signupResponse;
};

const logout = () => {
  //clear header;
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const AuthService = {
  login,
  signup,
  logout,
};

export default AuthService;
