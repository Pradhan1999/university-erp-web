# REST Data Provider for Refine

## Overview

The REST Data Provider from [`@refinedev/rest`](https://refine.dev/docs/data/data-provider/#rest-data-provider) enables your Refine app to connect to any RESTful API. It implements Refine's `DataProvider` interface, translating CRUD actions into HTTP requests.

---

## Basic Usage

```ts
import { Refine } from "@refinedev/core";
import restDataProvider from "@refinedev/rest";

const API_URL = "https://api.example.com";

<Refine dataProvider={restDataProvider(API_URL)} />;
```

`API_URL` should be the base URL of your REST API.

---

## Supported Methods

The REST Data Provider maps Refine actions to HTTP requests:

| Refine Method | HTTP Method | Description                     |
| ------------- | ----------- | ------------------------------- |
| getList       | GET         | Fetch list of resources         |
| getOne        | GET         | Fetch single resource by ID     |
| create        | POST        | Create a new resource           |
| update        | PATCH/PUT   | Update an existing resource     |
| deleteOne     | DELETE      | Delete a resource               |
| getMany       | GET         | Fetch multiple resources by IDs |
| custom        | Any         | Custom request support          |

---

## Options

You can customize the provider with options:

- **fetchClient**: Custom fetch implementation
- **httpClient**: Override default request logic
- **mapResponse**: Transform API responses before returning to Refine
- **buildHeaders**: Customize request headers
- **buildQueryParams**: Customize how query parameters are constructed

**Example:**

```ts
restDataProvider(API_URL, {
  buildHeaders: () => ({
    Authorization: "Bearer <token>",
  }),
});
```

---

## buildQueryParams

`buildQueryParams` lets you control how sorting, filtering, and pagination are converted into URL query parameters.

**Example:**

```ts
restDataProvider(API_URL, {
  buildQueryParams: ({ pagination, filters, sorters }) => {
    return {
      page: pagination?.current,
      perPage: pagination?.pageSize,
      ...filters?.reduce((acc, filter) => {
        acc[filter.field] = filter.value;
        return acc;
      }, {}),
    };
  },
});
```

This is useful when your backend expects specific query parameter formats.

---

## When to Use REST Data Provider

Use this provider when:

- Your backend exposes standard REST endpoints
- You want quick integration without building a custom provider
- You need flexibility to modify query parameters or headers

If your API structure differs significantly, you can extend or create a fully custom `DataProvider`.

---

## Summary

The REST Data Provider simplifies connecting Refine to REST APIs by:

- Handling CRUD operations
- Mapping Refine queries to HTTP requests
- Allowing customization via options like `buildQueryParams` and `buildHeaders`

It is ideal for most REST-based backend integrations.
