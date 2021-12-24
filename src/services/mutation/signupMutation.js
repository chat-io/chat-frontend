import { gql } from "apollo-boost";

const signupMutation = ({ firstName, lastName, email, gender, password }) => {
  return gql`
  mutation {
    signup(data: {
      firstName: "${firstName}",
      lastName: "${lastName}",
      gender: "${gender}",
      email: "${email}",
      password: "${password}",
    }) {
      token,
      user {
        id,
        firstName,
        lastName,
        email
      }
    }
  }`;
};

export default signupMutation;
