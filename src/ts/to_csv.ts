
import { item, row, doc, header_mode, quoting_circumstance, stringify_options } from './csv_types';






/***
 *
 *
 *
 * @param
 *
 */

function quote_frame(s: string): string {
  return `"${s.toString().replace(/"/g,'""')}"`;
}






/***
 *
 *
 *
 * @param
 *
 */

function quote_when_contains(s: string, conts: Array<string>): string {

  const hasAnyItem = conts.some( (d: string) => s.includes(d) );
  return hasAnyItem? quote_frame(s) : s;

}






/***
 *
 *
 *
 * @param
 *
 */

function quote_always(c: string): string {
  return quote_frame(c);
}






/***
 *
 *
 *
 * @param
 *
 */

function quote_minimal(c: string): string {
  return quote_when_contains(c, ['\r', '\n', ',', '"']);
}






/***
 *
 *
 *
 * @param
 *
 */

function quote_strict_nl(c: string): string {
  return quote_when_contains(c, ['\r\n',     ',', '"']);
}





/***
 *
 *
 *
 * @param
 *
 */

function quote_except_numbers(c: string): string {
  return /^[0-9.+-]*$/.test(c)? c : quote_frame(c);
}





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

function stringify_make_row(rowdata: row, quoter: (s: string) => string, field_separator: string): string {

  return rowdata.map(quoter)
                .join(field_separator);

}





/***
 *
 * # Main method
 *
 * Converts Javascript array data to CSV string data.
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
 * This is the module's main method, and is what the owner module exports as `.to(...)`.  Almost all use of this module
 * should be through this method (albeit generally under the alias.)
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

function to_csv(
  data: doc,

  {
    headers                = false,
    quoter                 = quote_minimal,
    field_separator        = ',',
    row_separator          = '\r\n',
    trailing_row_separator = false
  }: stringify_options = {}
)

{

  const header = headers? (stringify_make_row(headers, quoter, field_separator) + row_separator)
                        : '';

  const body   = data.map( (hd: row): string => stringify_make_row(hd, quoter, field_separator) )
                     .join(row_separator);

  return header + body + (trailing_row_separator? row_separator : '');

}





const quoters = {

  minimal        : quote_minimal,
  always         : quote_always,
  except_numbers : quote_except_numbers,
  strict_nl      : quote_strict_nl

};





export {

  to_csv,

  stringify_make_row,

  quote_frame,

  quote_when_contains,

  quoters,
    quote_always,
    quote_minimal,
    quote_strict_nl,
    quote_except_numbers

};
