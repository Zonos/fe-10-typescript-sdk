import { ClientError, GraphQLClient } from 'graphql-request';
import { GraphQLError } from 'graphql-request/dist/types';

import {
  getSdk as getAuthSdk,
  Sdk as AuthSdk,
} from 'src/types/generated/graphql.auth.types';
import {
  getSdk as getZonosCustomerGraphSdk,
  Sdk as ZonosCustomerGraphSdk,
} from 'src/types/generated/graphql.zonos-customer-graph.types';

type Schema = 'zonos-customer-graph' | 'auth';

type ZonosCustomerGraphQueryName = keyof ZonosCustomerGraphSdk;
type AuthQueryName = keyof AuthSdk;

type ZonosCustomerGraphEndpoint =
  `zonos-customer-graph/${ZonosCustomerGraphQueryName}`;
type AuthEndpoint = `auth/${AuthQueryName}`;
type Endpoint = ZonosCustomerGraphEndpoint | AuthEndpoint;

type SdkMethod<E extends Endpoint> =
  E extends `zonos-customer-graph/${infer RQ}`
    ? RQ extends ZonosCustomerGraphQueryName
      ? ZonosCustomerGraphSdk[RQ]
      : never
    : E extends `auth/${infer AQ}`
    ? AQ extends AuthQueryName
      ? AuthSdk[AQ]
      : never
    : never;

type QueryNameFromEndpoint<E extends Endpoint> =
  E extends `${Schema}/${infer Q}`
    ? Q extends ZonosCustomerGraphQueryName
      ? Q
      : Q extends AuthQueryName
      ? Q
      : never
    : never;

/**
 * Convert the directed positional arguments for each sdk method into an object while
 * maintaining optional parameters.
 */
type SdkMethodVariables<E extends Endpoint> = Parameters<SdkMethod<E>>[0] &
  undefined extends never
  ? { variables: Parameters<SdkMethod<E>>[0] }
  : { variables?: Parameters<SdkMethod<E>>[0] };

type GQLParams<E extends Endpoint> = {
  customFetch?: () => Promise<unknown>;
  customUrl?: string;
  endpoint: E;
  requestHeaders?: Parameters<SdkMethod<E>>[1];
} & SdkMethodVariables<E>;

export type GQLReturnJson<E extends Endpoint> = Awaited<
  ReturnType<SdkMethod<E>>
>;

type GQLReturn<E extends Endpoint> = {
  json: GQLReturnJson<E> | null;
  errors: GraphQLError[];
};

const getSdk = (schema: Schema) => {
  switch (schema) {
    case 'zonos-customer-graph': {
      return getZonosCustomerGraphSdk;
    }
    case 'auth': {
      return getAuthSdk;
    }
    default:
      throw new Error('Your query schema is missing');
  }
};

/**
 * @example
 * const { json, errors } = await gqlRequest({
 *   endpoint: 'auth/getCredentialServiceToken',
 *   variables: { input: { mode: 'LIVE', storeId: 3 } },
 * });
 */
export const gqlRequest = async <E extends Endpoint>({
  customFetch,
  customUrl,
  endpoint,
  requestHeaders,
  variables,
}: GQLParams<E>): Promise<GQLReturn<E>> => {
  const client = new GraphQLClient(customUrl || `/api/graphql/${endpoint}`, {
    fetch: customFetch || fetch,
  });

  const [schema, queryName] = endpoint.split('/') as [
    Schema,
    QueryNameFromEndpoint<E>
  ];
  const sdk = getSdk(schema)(client);
  const sdkMethod = sdk[queryName];
  try {
    if (typeof sdkMethod === 'function') {
      const json: GQLReturnJson<E> = await sdkMethod(variables, requestHeaders);
      return { json, errors: [] };
    }
    throw new Error(`Your schema function is missing`);
  } catch (e) {
    if (e instanceof ClientError) {
      return {
        json: null,
        errors: e.response.errors || [{ message: 'Unknown graphql error' }],
      };
    }
    return { json: null, errors: [{ message: JSON.stringify(e) }] };
  }
};
