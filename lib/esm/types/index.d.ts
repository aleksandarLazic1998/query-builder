/**
 * Constructs a URL query string by appending query parameters to a base URL.
 *
 * @param {object} options - Options for building the query string.
 * @param {string} options.baseQuery - The base URL to build upon.
 * @param {T | string} [options.queryObject] - An object containing key-value pairs to append as query parameters.
 * @returns {string} The constructed URL query string.
 *
 * @template T - The type of the query object containing key-value pairs.
 *
 * @example
 * // Basic usage
 * const baseQuery = 'https://api.example.com/data';
 * const queryObject = { page: 1, filter: 'recent' };
 * const queryString = queryBuilder({ baseQuery, queryObject });
 * // Returns: 'https://api.example.com/data?page=1&filter=recent'
 *
 * @example
 * // Usage without queryObject
 * const baseQuery = 'https://api.example.com/data';
 * const queryString = queryBuilder({ baseQuery });
 * // Returns: 'https://api.example.com/data'
 */
interface IProps<T> {
    baseQuery: string;
    queryObject?: T | string;
}
export declare const queryBuilder: <T>({ baseQuery, queryObject }: IProps<T>) => string;
export default queryBuilder;
//# sourceMappingURL=index.d.ts.map