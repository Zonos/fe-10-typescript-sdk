# Contributing to Zonos TypeScript SDK

Thank you for considering contributing to the Zonos TypeScript SDK! This guide will help you understand how to add new queries or mutations to the SDK, as well as how to document them properly.

## Table of Contents

- [Project Structure](#project-structure)
- [Adding a New Query or Mutation](#adding-a-new-query-or-mutation)
  - [Step 1: Create the GraphQL File](#step-1-create-the-graphql-file)
  - [Step 2: Generate TypeScript Types](#step-2-generate-typescript-types)
  - [Step 3: Add Client Method to zonosClient.ts](#step-3-add-client-method-to-zonosclientts)
  - [Step 4: Create Tests](#step-4-create-tests)
  - [Step 5: Document in README](#step-5-document-in-readme)
- [Code Style and Best Practices](#code-style-and-best-practices)
- [Testing](#testing)
- [Documentation Standards](#documentation-standards)

## Project Structure

The SDK is organized with the following structure:

```
src/
  _zonosClientRequest.ts  # Core request handler
  zonosClient.ts          # Client interface with all operations
  index.ts                # Main exports
  types/                  # Type definitions
    generated/            # Codegen output
  [feature]/              # Feature-specific folders
    _[operation].graphql.customer.ts  # GraphQL operations
    __tests__/            # Tests for operations
```

## Adding a New Query or Mutation

Follow these steps to add a new query or mutation to the SDK

### Step 1: Create the GraphQL File

1. Identify the appropriate feature folder for your operation, or create a new one if needed.
2. Create a new file named `_[operationName].graphql.customer.ts` in that folder.
3. Define your GraphQL query or mutation using the `gql` tag from 'graphql-request'.

Example:

```typescript
// src/myFeature/_myNewOperation.graphql.customer.ts
import { gql } from 'graphql-request';

export const myNewOperation = gql`
  query myNewOperation($param1: String!, $param2: Int) {
    myNewOperation(param1: $param1, param2: $param2) {
      id
      name
      value
      // Include all fields you need from the response
    }
  }
`;
```

For mutations, use the mutation keyword instead:

```typescript
export const myNewMutation = gql`
  mutation myNewMutation($input: MyMutationInput!) {
    myNewMutation(input: $input) {
      id
      success
      // Include all fields you need from the response
    }
  }
`;
```

### Step 2: Generate TypeScript Types

The SDK uses GraphQL Code Generator to create TypeScript types from your GraphQL operations:

1. Make sure your GraphQL file follows the naming convention `*.graphql.customer.ts`.
2. Run the codegen command:

```bash
# Using npm
npm run codegen

# Using pnpm
pnpm run codegen
```

This will update the generated types in `src/types/generated/graphql.customer.types.ts`.

### Step 3: Add Client Method to zonosClient.ts

Add a method to the `zonosClient` object in `src/zonosClient.ts`:

```typescript
/**
 * @description
 * This [query/mutation] is used to [describe purpose].
 * @example
 * const variables: ZonosMyNewOperationQueryVariables = {
 *   param1: 'value',
 *   param2: 42,
 * };
 * const { json, errors } = await zonosClient.myNewOperation({
 *   credentialToken,
 *   variables,
 * });
 */
myNewOperation: async (params: {
  credentialToken: string;
  customFetch?: typeof fetch;
  customUrl?: string;
  headers?: HeadersInit;
  variables: ZonosMyNewOperationQueryVariables;
}) =>
  zonosClientRequest({
    ...params,
    operationName: 'myNewOperation',
  }),
```

Don't forget to:
1. Import any required types at the top of the file
2. Add proper documentation with `@description` and `@example` tags
3. Include all parameters that the operation needs

### Step 4: Create Tests

Create tests for your new operation in the `__tests__` folder:

1. Create a file named `myNewOperation.graphql.customer.test.ts` in the feature's `__tests__` folder.
2. Write tests that cover the success and error cases:

```typescript
// src/myFeature/__tests__/myNewOperation.graphql.customer.test.ts
import { describe, test } from 'vitest';

import { mockedFetch } from 'src/test-utils/_mockedFetch';
import type { IResponseError } from 'src/types';
import type {
  ZonosMyNewOperationQuery,  // Or ZonosMyNewMutationMutation for mutations
  ZonosMyNewOperationQueryVariables,
} from 'src/types/generated/graphql.customer.types';
import { zonosClient } from 'src/zonosClient';

const credentialToken = 'test_token';

describe('myNewOperation data', () => {
  const data: ZonosMyNewOperationQuery = {
    myNewOperation: {
      id: 'test-id',
      name: 'Test Name',
      value: 42,
    }
  };
  
  const variables: ZonosMyNewOperationQueryVariables = {
    param1: 'test-value',
    param2: 42,
  };

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.myNewOperation({
      credentialToken,
      customFetch: async () => mockedFetch({ response: { data } }),
      variables,
    });
    expect(json).toEqual(data);
    expect(errors).toMatchInlineSnapshot(`[]`);
  });
});

describe('myNewOperation error', () => {
  const variables: ZonosMyNewOperationQueryVariables = {
    param1: 'test-value',
    param2: 42,
  };

  const error = {
    message: 'Error message',
  };

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.myNewOperation({
      credentialToken,
      customFetch: async () => mockedFetch({
        ok: false,
        response: {
          data: null,
          errors: [error] satisfies IResponseError[],
        },
      }),
      variables,
    });
    
    expect(json).toBeNull();
    expect(errors).toEqual([error]);
  });
});
```

### Step 5: Document in README

Add documentation for your new operation in the README.md under the "Common Queries and Mutations" section:

```markdown
<details>
<summary>

### Your New Operation Name

</summary>

Description of what this operation does and when to use it.

#### Example:

```typescript
const variables = {
  param1: 'value',
  param2: 42,
};

const { json, errors } = await zonosClient.myNewOperation({
  credentialToken,
  variables,
});
```

#### Zonos Graph Documentation:

For more details on the `myNewOperation` query/mutation and its parameters, visit the [Query.myNewOperation](https://zonos.com/developer/queries/myNewOperation) documentation.

</details>
```

## Code Style and Best Practices

- Use TypeScript's strict mode
- Follow the existing patterns in the codebase
- Write descriptive JSDoc comments
- Use meaningful variable and function names
- Keep GraphQL operations focused and avoid overfetching

## Testing

Ensure your contributed code meets the following testing requirements:

- All operations should have corresponding tests
- Tests should cover both success and error scenarios
- Use the `mockedFetch` utility for simulating API responses
- Run tests using `npm test` or `pnpm test` before submitting your contribution

## Documentation Standards

- All public methods should have JSDoc comments with `@description` and `@example` tags
- Include links to the Zonos Graph API documentation where appropriate
- Document all parameters and return values
- Keep examples up-to-date with the actual implementation
- For complex operations, include a detailed description of what the operation does and when to use it