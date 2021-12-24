import Client from "./apollo-client";
import loginMutation from "./mutation/loginMutation";

const login = async ({ email, password }) => {
  console.log(email, password);
  return await Client.mutate({
    mutation: loginMutation(email, password),
  });
};

const AuthService = {
  login,
};

export default AuthService;
