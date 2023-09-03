import { gql } from '@apollo/client';

// const GET_CLIENTS = gql`
//   query getClients {
//     clients {
//       id
//       name
//       email
//       phone
//     }
//   }
// `;

// export { GET_CLIENTS };

const GET_USERS = gql`
  query Users {
    users {
      email
      id
      name
    }
  }
`;

export { GET_USERS };
