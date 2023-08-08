# Query Builder: Create URL with Query Parameters

This utility function enables you to construct a complete URL with query parameters based on a given base URL and a query object. It simplifies the process of building URLs with dynamic query parameters for web applications.

## Installation

To use the query builder utility in your project, you can install it via npm:

```bash
npm install query-builder-al
```

```bash
import queryBuilder from 'query-builder-al';

const query = queryBuilder({
  baseQuery: 'https://www.some-website.com/some-path',
  queryObject: { page: 1, search: 'John Doe', per_page: 15 },
});

console.log(query);
// Output: https://www.some-website.com/some-path?page=1&search=John+Doe&per_page=15
```
