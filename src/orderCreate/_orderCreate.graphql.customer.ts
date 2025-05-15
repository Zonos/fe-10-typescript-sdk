import { gql } from 'graphql-request';

export const orderCreate = gql`
  mutation orderCreate($input: OrderCreateInput!) {
    orderCreate(input: $input) {
      id
      accountOrderNumber
      currencyCode
      grandTotal
      status
      createdAt
      updatedAt
      metadata {
        key
        value
      }
      references {
        key
        value
      }
      zonosOrderId
    }
  }
`;
