"use strict";

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryBuilder = void 0;
var queryBuilder = function queryBuilder(_ref) {
  var baseQuery = _ref.baseQuery,
    queryObject = _ref.queryObject;
  var query = new URL(baseQuery, 'http://www.example.com');
  if (queryObject) {
    Object.entries(queryObject).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      if (!key) return;
      query.searchParams.append(key, value);
    });
  }
  var decodedPathnameWithQueryParams = decodeURIComponent(query.toString());
  return decodedPathnameWithQueryParams.replace('http://www.example.com', '');
};
exports.queryBuilder = queryBuilder;
exports.default = exports.queryBuilder;