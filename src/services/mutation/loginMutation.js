import { gql } from "apollo-boost";

const loginMutation = (email, password) => {
  return gql`
      mutation {
        login(data: { email: "${email}", password: "${password}" }) {
          token
          user {
            id
            firstName
            lastName
          }
        }
      }
    `;
};

export default loginMutation;
