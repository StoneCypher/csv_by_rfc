
import { item, row, doc, headerMode, quotingCircumstance, stringifyOptions } from './csv_types';





function quoteFrame(s: string): string {
  return `"${s.toString().replace(/"/g,'""')}"`;
}





function quoteWhenContains(s: string, conts: Array<string>): string {

  const hasAnyItem = conts.some( (d: string) => s.includes(d) );
  return hasAnyItem? quoteFrame(s) : s;

}





function quoteAlways(c: string): string {
  return quoteFrame(c);
}





function quoteMinimal(c: string): string {
  return quoteWhenContains(c, ['\r', '\n', ',', '"']);
}





function quoteStrictNL(c: string): string {
  return quoteWhenContains(c, ['\r\n',     ',', '"']);
}





function quoteExceptNumbers(c: string): string {
  return /^[0-9.+-]*$/.test(c)? c : quoteFrame(c);
}





function stringifyMakeRow(rowdata: row, quoter: (s: string) => string, field_separator: string): string {

  return rowdata.map(quoter)
                .join(field_separator);

}





function stringify(
  data: doc,

  {
    headers                = false,
    quoter                 = quoteMinimal,
    field_separator        = ',',
    row_separator          = '\r\n',
    trailing_row_separator = false
  }: stringifyOptions = {}
)

{

  const header = headers? (stringifyMakeRow(headers, quoter, field_separator) + row_separator)
                        : '';

  const body   = data.map( (hd: row): string => stringifyMakeRow(hd, quoter, field_separator) )
                     .join(row_separator);

  return header + body + (trailing_row_separator? row_separator : '');

}





const quoters = {

  minimal        : quoteMinimal,
  always         : quoteAlways,
  except_numbers : quoteExceptNumbers,
  strict_nl      : quoteStrictNL

};





export {

  stringify,

  stringifyMakeRow,

  quoteFrame,

  quoteWhenContains,

  quoters,
    quoteAlways,
    quoteMinimal,
    quoteStrictNL,
    quoteExceptNumbers

};
