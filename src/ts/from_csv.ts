
import { Cell, Row, BareCSV, HeaderCSV, CSV } from './csv_types';





type csv_options = {

  separator?      : string;
  quote?          : string;
  embed_quote?    : string;
  newline?        : string;
  parse_numbers?  : boolean;
  parse_booleans? : boolean;
  has_headers?    : boolean;

};





function from_csv(uCSV: string, uOptions: csv_options = {}): CSV {
  
  const separator   = uOptions.separator   ?? ',',
        quote       = uOptions.quote       ?? '"',
        embed_quote = uOptions.embed_quote ?? (quote + quote),
        newline     = uOptions.newline     ?? '\r\n',
        hasHeaders  = uOptions.has_headers ?? false,
        curMax      = uCSV.length,
        nlLen       = newline.length,
        sepLen      = separator.length,
        qtLen       = quote.length,
        eqLen       = embed_quote.length;

  let cursor     : number  = 0,
      newCell    : boolean = true,
      inQuote    : boolean = false,
      afterClose : boolean = false,
      output     : BareCSV = [],
      row        : Row     = [],
      cell       : Cell    = '';

  while (cursor < curMax) {

    if (inQuote) {

      if (uCSV.substring(cursor, cursor + eqLen) === embed_quote) {

        cell      += quote;
        cursor    += eqLen;
        newCell    = false;
        afterClose = false;

      } else if (uCSV.substring(cursor, cursor + qtLen) === quote) {

        // it gets pushed at the separator, not here
        inQuote    = false;
        cursor    += qtLen;
        newCell    = false;  // not until the separator
        afterClose = true;

      } else {

        cell      += uCSV.charAt(cursor);
        newCell    = false;
        afterClose = false;
        ++cursor;

      }

    } else {

      if (uCSV.substring(cursor, cursor + qtLen) === quote) {

        if (newCell) {
          inQuote    = true;
          cursor    += qtLen;
          newCell    = false;
          afterClose = false;
        } else {
          throw new Error(`quotes may only begin cells, at ${cursor}`)
        }

      } else if (uCSV.substring(cursor, cursor + nlLen) === newline) {

        row.push(cell);
        cell       = '';
        output.push(row);
        row        = [];
        cursor    += nlLen;
        newCell    = true;
        afterClose = false;

      } else if (uCSV.substring(cursor, cursor + sepLen) === separator) {

        row.push(cell);
        cell       = '';
        cursor    += sepLen;
        newCell    = true;
        afterClose = false;

      } else {

        if (afterClose) { 
          throw new Error(`cannot have data after close quote, before separator, at ${cursor}`); 
        }

        cell      += uCSV.charAt(cursor);
        newCell    = false;
        afterClose = false;
        ++cursor;

      }

    }

  }

  row.push(cell);
  output.push(row);

  if (hasHeaders) {
    const headers: string[] | undefined = output.shift();
    return { headers: headers ?? [], data: output };
  } else {
    return output;
  }

}





export {

  from_csv

};
