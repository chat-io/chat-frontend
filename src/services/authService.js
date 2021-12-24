import Client from "./apollo-client";
import loginMutation from "./mutation/loginMutation";
import signupMutation from "./mutation/signupMutation";

const login = async ({ email, password }) => {
  return await Client.mutate({
    mutation: loginMutation(email, password),
  });
};

const signup = async (data) => {
  return await Client.mutate({
    mutation: signupMutation(data),
  });
};

const AuthService = {
  login,
  signup,
};

export default AuthService;
