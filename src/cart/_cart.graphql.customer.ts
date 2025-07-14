import { gql } from 'graphql-request';

export const cart = gql`
  mutation cartUpsert($input: CartUpsertInput!) {
    cartUpsert(input: $input) {
      ...CartFragment
    }
  }

  query cartById($id: ID!) {
    cart(id: $id) {
      ...CartFragment
    }
  }

  fragment CartFragment on Cart {
    id
    organizationId
    createdAt
    expiresAt
    adjustments {
      amount
      currencyCode
      description
      productId
      sku
      type
    }
    items {
      id
      amount
      name
      currencyCode
      description
      imageUrl
      quantity
      sku
      countryOfOrigin
      provinceOfOrigin
      measurements {
        source
        type
        unitOfMeasure
        value
      }
      productId
      restriction {
        reason
        action
      }
      attributes {
        key
        value
      }
      metadata {
        key
        value
      }
    }
    metadata {
      key
      value
    }
  }
`;
