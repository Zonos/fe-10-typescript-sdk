import { zonosClientRequest } from './_zonosClientRequest';
import type {
  ZonosCartByIdQueryVariables,
  ZonosCartUpsertMutationVariables,
  ZonosCatalogItemQueryVariables,
  ZonosClassificationsCalculateMutationVariables,
  ZonosFullLandedCostMutationVariables,
  ZonosLandedCostOnlyMutationVariables,
  ZonosMutationOrderCreateArgs,
} from './types/generated/graphql.customer.types';

/**
 * @description
 * This function provides an interface with examples for making requests to the Zonos Graph.
 * @example
 *  // Replace 'your_credential_token' with your actual Zonos API credential token
 *  const credentialToken = 'your_credential_token';
 *  const variables = { productId: 'test-product-id', sku: 'test-sku' };
 *  const { json, errors } = await zonosClient.catalogItem({ credentialToken, variables });
 */
export const zonosClient = {
  /**
   * @description
   * This query is used to fetch a cart by its id.
   * @example
   * const variables: ZonosCartByIdQueryVariables = {
   *   id: 'cart_6568ba15-def6-44df-9731-a513f8f4f09b',
   * };
   *
   * const { errors, json } = await zonosClient.cartById({
   *   credentialToken: 'test_token',
   *   variables,
   * });
   */
  cartById: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosCartByIdQueryVariables;
  }) => zonosClientRequest({ ...params, operationName: 'cartById' }),

  /**
   * @description
   * This mutation is used to create or update a cart, provide cart `id` in the input if you have one.
   *
   * **Note: The items array in the input should contain the complete list of all items that should be in the cart after the operation, not just the items being added or modified. This means you need to include all existing items plus any new ones you want to add.**
   * @example
   * const variables: ZonosCartUpsertMutationVariables = {
   *   input: {
   *     adjustments: [],
   *     id: 'cart_6568ba15-def6-44df-9731-a513f8f4f09b',
   *     items: [
   *       {
   *         amount: 2.99,
   *         currencyCode: 'USD',
   *         description: 'Zonos leather backpack',
   *         name: 'Zonos leather backpack',
   *         quantity: 2,
   *       },
   *   },
   * };
   *
   * const { errors, json } = await zonosClient.cartUpsert({
   *   credentialToken: 'test_token',
   *   variables,
   * });
   */
  cartUpsert: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosCartUpsertMutationVariables;
  }) => zonosClientRequest({ ...params, operationName: 'cartUpsert' }),
  /**
   * @description
   * This is used for legacy to fetch the catalog item.
   * @example
   *
   * const variables: ZonosCatalogItemQueryVariables = {
   *   id: 'catalog_item_7a628c98-9ded-48c8-8831-b227f919e25d',
   *   productId: 'test',
   *   sku: 'test',
   * };
   * const { json, errors } =
   *   await client.getCatalogItem({
   *     credentialToken: 'test_token',
   *     variables
   *   });
   */
  catalogItem: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosCatalogItemQueryVariables;
  }) =>
    zonosClientRequest({
      ...params,
      operationName: 'catalogItem',
    }),
  /**
   * @description
   * This mutation is used to classify an item.
   * @example
   *  const variables: ZonosClassificationsCalculateMutationVariables = {
   *     inputs: [{ name: 'backpack' }],
   *  };
   *  const { json, errors } =
   *    await client.classificationsCalculate({
   *      credentialToken: 'test_token',
   *      variables
   *    });
   */
  classificationsCalculate: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosClassificationsCalculateMutationVariables;
  }) =>
    zonosClientRequest({
      ...params,
      operationName: 'classificationsCalculate',
    }),
  /**
   * @description
   * This mutation is the workflow that comprises of 6 different mutations:
   * partyCreateWorkflow (destination, payor, and origin)
   * itemCreateWorkflow
   * cartonizationWorkflow
   * shipmentRatingCalculateWorkflow
   * landedCostCalculateWorkflow
   * @example
   * const variables: ZonosFullLandedCostMutationVariables = {
   *   partyCreateWorkflowInput: [
   *     {
   *       location: {
   *         administrativeArea: '',
   *         administrativeAreaCode: 'QC',
   *         countryCode: 'CA',
   *         line1: '4398 St Laurent av',
   *         line2: ' ',
   *         locality: 'Montreal',
   *         postalCode: 'H2W 1Z5',
   *       },
   *       type: 'ORIGIN',
   *     },
   *     {
   *       location: {
   *         administrativeArea: '',
   *         administrativeAreaCode: '',
   *         countryCode: 'GB',
   *         line1: 'location line 1',
   *         locality: '',
   *         postalCode: 'SW1W 0NY',
   *       },
   *       type: 'DESTINATION',
   *     },
   *   ],
   *   itemCreateWorkflowInput: [
   *     {
   *       amount: 3,
   *       countryOfOrigin: 'CN',
   *       currencyCode: 'USD',
   *       description: 'Backpack',
   *       hsCode: '4202.92',
   *       productId: 'e89861c0-f04e-11ee-bc4f-4b0822420556',
   *       quantity: 1,
   *     },
   *   ],
   *   landedCostCalculateWorkflowInput: {
   *     calculationMethod: 'DDP',
   *     endUse: 'NOT_FOR_RESALE',
   *     tariffRate: 'ZONOS_PREFERRED',
   *   },
   * };
   *
   * const { errors: clientErrors, json: clientJson } =
   *   await zonosClient.fullLandedCost({
   *     credentialToken: 'test_token',
   *     variables,
   *   });
   */
  fullLandedCost: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosFullLandedCostMutationVariables;
  }) =>
    zonosClientRequest({
      ...params,
      operationName: 'fullLandedCost',
    }),
  /**
   * @description
   * This mutation is the workflow that comprises of 6 different mutations:
   * partyCreateWorkflow (destination, payor, and origin)
   * itemCreateWorkflow
   * cartonizationWorkflow
   * shipmentRatingCreateWorkflow
   * landedCostCalculateWorkflow
   * @example
   * const variables: ZonosLandedCostOnlyMutationVariables = {
   *     itemCreateWorkflowInput: [
   *       {
   *         amount: 3,
   *         countryOfOrigin: 'CN',
   *         currencyCode: 'USD',
   *         description: 'Backpack',
   *         hsCode: '4202.92',
   *         productId: 'e89861c0-f04e-11ee-bc4f-4b0822420556',
   *         quantity: 1,
   *       },
   *     ],
   *     landedCostCalculateWorkflowInput: {
   *       calculationMethod: 'DDP',
   *       endUse: 'NOT_FOR_RESALE',
   *       tariffRate: 'ZONOS_PREFERRED',
   *     },
   *     partyCreateWorkflowInput: [
   *       {
   *         location: {
   *           administrativeArea: '',
   *           administrativeAreaCode: 'QC',
   *           countryCode: 'CA',
   *           line1: '4398 St Laurent av',
   *           line2: ' ',
   *           locality: 'Montreal',
   *           postalCode: 'H2W 1Z5',
   *         },
   *         type: 'ORIGIN',
   *       },
   *       {
   *         location: {
   *           administrativeArea: '',
   *           administrativeAreaCode: '',
   *           countryCode: 'GB',
   *           line1: 'location line 1',
   *           locality: '',
   *           postalCode: 'SW1W 0NY',
   *         },
   *         type: 'DESTINATION',
   *       },
   *     ],
   *     shipmentRatingCreateWorkflowInput: {
   *       amount: 20,
   *       currencyCode: 'USD',
   *       displayName: 'custom:custom',
   *       serviceLevelCode: 'custom:custom',
   *     },
   *   };
   *
   * const { errors: clientErrors, json: clientJson } =
   *   await zonosClient.landedCostOnly({
   *     credentialToken: 'test_token',
   *     variables,
   *   });
   */
  landedCostOnly: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosLandedCostOnlyMutationVariables;
  }) =>
    zonosClientRequest({
      ...params,
      operationName: 'landedCostOnly',
    }),
  /**
   * @description
   * This mutation is used to create an order from a landed cost calculation.
   * @example
   * const variables: ZonosMutationOrderCreateArgs = {
   *   input: {
   *     accountOrderNumber: 'order-123',
   *     currencyCode: 'USD',
   *     landedCostId: 'landed_cost_123',
   *   },
   * };
   *
   * const { errors, json } = await zonosClient.orderCreate({
   *   credentialToken: 'test_token',
   *   variables,
   * });
   */
  orderCreate: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosMutationOrderCreateArgs;
  }) =>
    zonosClientRequest({
      ...params,
      operationName: 'orderCreate',
    }),
};
