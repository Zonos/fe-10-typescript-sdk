import { describe, test } from 'vitest';

import { mockedFetch } from 'src/test-utils/_mockedFetch';
import type { IResponseError } from 'src/types';
import type {
  ZonosCartByIdQuery,
  ZonosCartByIdQueryVariables,
  ZonosCartUpsertMutation,
  ZonosCartUpsertMutationVariables,
} from 'src/types/generated/graphql.customer.types';
import { zonosClient } from 'src/zonosClient';

const credentialToken = 'test_token';

describe('cartById data', () => {
  const data: ZonosCartByIdQuery = {
    cart: {
      adjustments: [
        {
          amount: -5,
          currencyCode: 'USD',
          description: 'Discount',
          productId: null,
          sku: null,
          type: 'CART_TOTAL',
        },
      ],
      createdAt: '2025-07-07T23:07:52.310Z',
      expiresAt: '2025-07-07T23:08:52.273Z',
      id: 'cart_6568ba15-def6-44df-9731-a513f8f4f09b',
      items: [
        {
          amount: 2.99,
          attributes: null,
          countryOfOrigin: null,
          currencyCode: 'USD',
          description: 'Zonos leather backpack',
          id: 'item_0m8hfkaa7w83h',
          imageUrl: null,
          measurements: [],
          metadata: null,
          name: 'Zonos leather backpack',
          productId: '',
          provinceOfOrigin: null,
          quantity: 2,
          restriction: null,
          sku: '',
        },
        {
          amount: 6.99,
          attributes: null,
          countryOfOrigin: null,
          currencyCode: 'USD',
          description: 'Zonos T-shirt',
          id: 'item_0m8hfkadzw83m',
          imageUrl: null,
          measurements: [],
          metadata: null,
          name: 'Zonos T-shirt',
          productId: '',
          provinceOfOrigin: null,
          quantity: 1,
          restriction: null,
          sku: '',
        },
      ],
      metadata: [
        {
          key: 'cartCreatedAtEpoc',
          value: '1751929672',
        },
        {
          key: 'cartCreatedAt',
          value: '2025-07-07T23:07:52.265973009Z',
        },
      ],
      organizationId: 'organization_6454c8b7-4409-40b5-a56f-5af63190c42c',
    },
  };
  const variables: ZonosCartByIdQueryVariables = {
    id: 'cart_6568ba15-def6-44df-9731-a513f8f4f09b',
  };

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.cartById({
      credentialToken,
      customFetch: async () => mockedFetch({ response: { data } }),
      variables,
    });
    expect(json).toEqual(data);
    expect(errors).toMatchInlineSnapshot(`[]`);
  });
});

describe('cartById error', () => {
  const variables: ZonosCartByIdQueryVariables = {
    id: 'cart_6568ba15-def6-44df-9731-a513f8f4f09b',
  };

  const error = {
    message:
      'HTTP Status 401 - Full authentication is required to access this resource',
  };

  const customFetch = async () =>
    mockedFetch({
      ok: false,
      response: {
        data: null,
        errors: [error] satisfies IResponseError[],
      },
    });

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.cartById({
      credentialToken,
      customFetch,
      variables,
    });
    expect(json).toBeNull();
    expect(errors).toEqual([error]);
  });
});

describe('[New cart] cartUpsert data', () => {
  const data: ZonosCartUpsertMutation = {
    cartUpsert: {
      adjustments: [
        {
          amount: -5,
          currencyCode: 'USD',
          description: 'Discount',
          productId: null,
          sku: null,
          type: 'CART_TOTAL',
        },
      ],
      createdAt: '2025-07-07T23:07:52.310Z',
      expiresAt: '2025-07-07T23:08:52.273Z',
      id: 'cart_6568ba15-def6-44df-9731-a513f8f4f09b',
      items: [
        {
          amount: 2.99,
          attributes: null,
          countryOfOrigin: null,
          currencyCode: 'USD',
          description: 'Zonos leather backpack',
          id: 'item_0m8hfkaa7w83h',
          imageUrl: null,
          measurements: [],
          metadata: null,
          name: 'Zonos leather backpack',
          productId: '',
          provinceOfOrigin: null,
          quantity: 2,
          restriction: null,
          sku: '',
        },
        {
          amount: 6.99,
          attributes: null,
          countryOfOrigin: null,
          currencyCode: 'USD',
          description: 'Zonos T-shirt',
          id: 'item_0m8hfkadzw83m',
          imageUrl: null,
          measurements: [],
          metadata: null,
          name: 'Zonos T-shirt',
          productId: '',
          provinceOfOrigin: null,
          quantity: 1,
          restriction: null,
          sku: '',
        },
      ],
      metadata: [
        {
          key: 'cartCreatedAtEpoc',
          value: '1751929672',
        },
        {
          key: 'cartCreatedAt',
          value: '2025-07-07T23:07:52.265973009Z',
        },
      ],
      organizationId: 'organization_6454c8b7-4409-40b5-a56f-5af63190c42c',
    },
  };

  const variables: ZonosCartUpsertMutationVariables = {
    input: {
      adjustments: [
        {
          amount: -5,
          currencyCode: 'USD',
          description: 'Discount',
          type: 'CART_TOTAL',
        },
      ],
      items: [
        {
          amount: 2.99,
          currencyCode: 'USD',
          description: 'Zonos leather backpack',
          name: 'Zonos leather backpack',
          quantity: 2,
        },
        {
          amount: 6.99,
          currencyCode: 'USD',
          description: 'Zonos T-shirt',
          name: 'Zonos T-shirt',
          quantity: 1,
        },
      ],
    },
  };

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.cartUpsert({
      credentialToken,
      customFetch: async () => mockedFetch({ response: { data } }),
      variables,
    });
    expect(json).toEqual(data);
    expect(errors).toMatchInlineSnapshot(`[]`);
  });
});

describe('[New cart] cartUpsert error', () => {
  const variables: ZonosCartUpsertMutationVariables = {
    input: {
      adjustments: [],
      items: [],
    },
  };

  const error = {
    message:
      'HTTP Status 401 - Full authentication is required to access this resource',
  };

  const customFetch = async () =>
    mockedFetch({
      ok: false,
      response: {
        data: null,
        errors: [error] satisfies IResponseError[],
      },
    });

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.cartUpsert({
      credentialToken,
      customFetch,
      variables,
    });
    expect(json).toBeNull();
    expect(errors).toEqual([error]);
  });
});

describe('[Existing cart] cartUpsert data', () => {
  const data: ZonosCartUpsertMutation = {
    cartUpsert: {
      adjustments: [
        {
          amount: -5,
          currencyCode: 'USD',
          description: 'Discount',
          productId: null,
          sku: null,
          type: 'CART_TOTAL',
        },
      ],
      createdAt: '2025-07-07T23:07:52.310Z',
      expiresAt: '2025-07-07T23:08:52.273Z',
      id: 'cart_6568ba15-def6-44df-9731-a513f8f4f09b',
      items: [
        {
          amount: 2.99,
          attributes: null,
          countryOfOrigin: null,
          currencyCode: 'USD',
          description: 'Zonos leather backpack',
          id: 'item_0m8hfkaa7w83h',
          imageUrl: null,
          measurements: [],
          metadata: null,
          name: 'Zonos leather backpack',
          productId: '',
          provinceOfOrigin: null,
          quantity: 2,
          restriction: null,
          sku: '',
        },
        {
          amount: 6.99,
          attributes: null,
          countryOfOrigin: null,
          currencyCode: 'USD',
          description: 'Zonos T-shirt',
          id: 'item_0m8hfkadzw83m',
          imageUrl: null,
          measurements: [],
          metadata: null,
          name: 'Zonos T-shirt',
          productId: '',
          provinceOfOrigin: null,
          quantity: 1,
          restriction: null,
          sku: '',
        },
      ],
      metadata: [
        {
          key: 'cartCreatedAtEpoc',
          value: '1751929672',
        },
        {
          key: 'cartCreatedAt',
          value: '2025-07-07T23:07:52.265973009Z',
        },
      ],
      organizationId: 'organization_6454c8b7-4409-40b5-a56f-5af63190c42c',
    },
  };

  const variables: ZonosCartUpsertMutationVariables = {
    input: {
      adjustments: [
        {
          amount: -5,
          currencyCode: 'USD',
          description: 'Discount',
          type: 'CART_TOTAL',
        },
      ],
      id: 'cart_6568ba15-def6-44df-9731-a513f8f4f09b',
      items: [
        {
          amount: 2.99,
          currencyCode: 'USD',
          description: 'Zonos leather backpack',
          name: 'Zonos leather backpack',
          quantity: 2,
        },
        {
          amount: 6.99,
          currencyCode: 'USD',
          description: 'Zonos T-shirt',
          name: 'Zonos T-shirt',
          quantity: 1,
        },
      ],
    },
  };

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.cartUpsert({
      credentialToken,
      customFetch: async () => mockedFetch({ response: { data } }),
      variables,
    });
    expect(json).toEqual(data);
    expect(errors).toMatchInlineSnapshot(`[]`);
  });
});

describe('[Existing cart] cartUpsert error', () => {
  const variables: ZonosCartUpsertMutationVariables = {
    input: {
      adjustments: [],
      items: [],
    },
  };

  const error = {
    message:
      'HTTP Status 401 - Full authentication is required to access this resource',
  };

  const customFetch = async () =>
    mockedFetch({
      ok: false,
      response: {
        data: null,
        errors: [error] satisfies IResponseError[],
      },
    });

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.cartUpsert({
      credentialToken,
      customFetch,
      variables,
    });
    expect(json).toBeNull();
    expect(errors).toEqual([error]);
  });
});
