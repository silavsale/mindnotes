import { gql } from '@apollo/client';

const GET_NOTES = gql`
  query Notes {
    notes {
      id
      title
      content
      status
      #   creator
    }
  }
`;

export { GET_NOTES };
