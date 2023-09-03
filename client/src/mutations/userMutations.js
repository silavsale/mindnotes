import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation createUser($email: String!, $name: String) {
    createUser(email: $email, name: $name) {
      id
      name
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($email: String!) {
    deleteUser(email: $email) {
      id
      name
      email
    }
  }
`;

export { CREATE_USER, DELETE_USER };
