"use strict";
/***
 *
 * Ok
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***
 *
 * Perform a quoting
 *
 * @param s The cell string data
 *
 * @returns The string provided, quoted
 *
 */
function quote_frame(s) {
    return `"${s.toString().replace(/"/g, '""')}"`;
}
exports.quote_frame = quote_frame;
/***
 *
 * Quoting metafunction that handles quoting given an array of triggers
 *
 * @param s     The cell string data
 * @param conts An array of trigger strings
 *
 * @returns The string provided, quoted when containing anything from `conts`
 *
 */
function quote_when_contains(s, conts) {
    const hasAnyItem = conts.some((d) => s.includes(d));
    return hasAnyItem ? quote_frame(s) : s;
}
exports.quote_when_contains = quote_when_contains;
/***
 *
 * Quote every cell
 *
 * @param cell The cell data
 *
 * @returns The string provided, quoted
 *
 */
function quote_always(c) {
    return quote_frame(c);
}
exports.quote_always = quote_always;
/***
 *
 * Quote only that which needs to be quoted (strings containing `",\r\n`)
 *
 * @param cell The cell data
 *
 * @returns The string provided, quoted when containing `"`, `,`, `\r`, or `\n`
 *
 */
function quote_minimal(c) {
    return quote_when_contains(c, ['\r', '\n', ',', '"']);
}
exports.quote_minimal = quote_minimal;
/***
 *
 * Quote only that which needs to be quoted.  Pass carriage returns and newlines individually without quoting (which is
 * strictly correct, but which few parsers will handle correctly.)
 *
 * @param cell The cell data
 *
 * @returns The string provided, quoted when containing `"`, `,`, or `\r\n`
 *
 */
function quote_strict_nl(cell) {
    return quote_when_contains(cell, ['\r\n', ',', '"']);
}
exports.quote_strict_nl = quote_strict_nl;
/***
 *
 * Quote things which do not appear to be numbers (that is, which contain characters other than 0-9, period, + and -.)
 *
 * @param cell The cell data
 *
 * @returns The string provided, quoted if not believed to be a number
 *
 */
function quote_except_numbers(cell) {
    return /^[0-9.+-]*$/.test(cell) ? cell : quote_frame(cell);
}
exports.quote_except_numbers = quote_except_numbers;
/***
 *
 * Makes a single CSV document's row.
 *
 * ```
 * import { stringify_make_row, quote_minimal, quote_always } from 'csv_4180';
 *
 * stringify_make_row([1,2,3], quote_minimal, ",");
 * // returns '1,2,3'
 *
 * stringify_make_row([4,5,6], quote_always, ":");
 * // returns '"4":"5":"6"'
 * ```
 *
 * @param rowdata         The data underlying this row only
 * @param quoter          A function responsible for making decisions about quoting the cell's data
 * @param field_separator The string used inbetween cells
 *
 * @returns The row as a CSV substring
 *
 */
function stringify_make_row(rowdata, quoter, field_separator) {
    return rowdata.map(quoter)
        .join(field_separator);
}
exports.stringify_make_row = stringify_make_row;
/***
 *
 * # Main method
 *
 * Converts Javascript array data to CSV string data.
 *
 * This is the module's main method.  Almost all use of this module should be through this method.
 *
 * ## Basic usage
 *
 * The module is pre-loaded with sensible defaults; as a result, generally it's good enough to just call this with your
 * data, like so:
 *
 * ```
 * import { to_csv } from 'csv_4180';
 *
 * const data = [ ['ace', 'deuce', 'tres'], [1, 2, 3] ],
 *       csv  = to_csv(data);
 *
 * console.log(csv);  // 'ace,deuce,tres\r\n1,2,3'
 * ```
 *
 * ## Embedded wacky text
 *
 * Of course, much of the purpose of a module like this is to make sure that the gross bits have been properly handled:
 *
 * ```
 * import { to_csv } from 'csv_4180';
 *
 * const data = [ ['ace', 'deuce'], [1, 2], ['a"b', 'c\r\nd'] ];
 * console.log( to_csv(data) );  // 'ace,deuce\r\n1,2\r\n"a""b","c\r\nd"'
 * ```
 *
 * ## Configuration
 *
 * whargarbl todo
 *
 * @param data                   The CSV's dataset
 * @param headers                An array of strings to be used as the header row
 * @param quoter                 A function to determine how and when to quote individual cells
 * @param field_separator        What string to use inbetween cells
 * @param row_separator          What string to use inbetween rows
 * @param trailing_row_separator Whether to put a row separator after the last line
 *
 * @returns The dataset as a CSV string
 *
 */
function to_csv(data, { headers = false, quoter = quote_minimal, field_separator = ',', row_separator = '\r\n', trailing_row_separator = false } = {}) {
    const header = headers ? (stringify_make_row(headers, quoter, field_separator) + row_separator)
        : '';
    const body = data.map((hd) => stringify_make_row(hd, quoter, field_separator))
        .join(row_separator);
    return header + body + (trailing_row_separator ? row_separator : '');
}
exports.to_csv = to_csv;
const quoters = {
    minimal: quote_minimal,
    always: quote_always,
    except_numbers: quote_except_numbers,
    strict_nl: quote_strict_nl
};
exports.quoters = quoters;
//# sourceMappingURL=to_csv.js.map