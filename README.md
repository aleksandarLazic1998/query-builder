# Query Builder: Create URL with Query Parameters

This utility function enables you to construct a complete URL with query parameters based on a given base URL and a query object. It simplifies the process of building URLs with dynamic query parameters for web applications.

## Installation

To use the query builder utility in your project, you can install it via npm:

```bash
npm install query-builder-al
```

Query builder works with both types of modules.

```bash
import queryBuilder from 'query-builder-al';

const query = queryBuilder({
  baseQuery: 'https://www.some-website.com/some-path',
  queryObject: { page: 1, search: 'John Doe', per_page: 15 },
});

console.log(query);
// Output: https://www.some-website.com/some-path?page=1&search=John+Doe&per_page=15
```

```bash
const queryBuilder = require('query-builder-al');

const query = queryBuilder({
  baseQuery: 'https://www.some-website.com/some-path',
  queryObject: { page: 1, search: 'John Doe', per_page: 15 },
});

console.log(query);
// Output: https://www.some-website.com/some-path?page=1&search=John+Doe&per_page=15
```

```bash
const queryBuilder = require('query-builder-al');


// If you do not add value it will just create "&key_name= "

const query = queryBuilder({
  baseQuery: 'https://www.some-website.com/some-path',
  queryObject: { page: 1, search: '', per_page: 15 },
});

console.log(query);
// Output: https://www.some-website.com/some-path?page=1&search=&per_page=15
```

Contributions to this utility are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/aleksandarLazic1998/query-builder).
