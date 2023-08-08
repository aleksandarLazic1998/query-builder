import queryBuilder from './index';

describe('It should test the query builder edge cases', () => {
  test('it will create a query only without URL', () => {
    const query = queryBuilder({
      baseQuery: '/some-path',
      queryObject: { page: 1, search: 'John Doe' },
    });

    expect(query).toBe('/some-path?page=1&search=John+Doe');
  });

  test('it will create a whole url with query and parameters', () => {
    const query = queryBuilder({
      baseQuery: 'https://www.some-website.com/some-path',
      queryObject: { page: 1, search: 'John Doe', per_page: 15 },
    });

    expect(query).toBe(
      'https://www.some-website.com/some-path?page=1&search=John+Doe&per_page=15',
    );
  });

  test('it will create a whole empty query value if the value is not provided', () => {
    const query = queryBuilder({
      baseQuery: 'https://www.some-website.com/some-path',
      queryObject: { page: 1, search: '', per_page: 15 },
    });

    expect(query).toBe(
      'https://www.some-website.com/some-path?page=1&search=&per_page=15',
    );
  });
});
