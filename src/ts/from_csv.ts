
type csv_options = {
  separator?   : string;
  quote?       : string;
  embed_quote? : string;
  newline?     : string;
};



function from_csv(uCSV: string, uOptions: csv_options = {}): any[][] {
  
  const separator   = uOptions.separator ?? ',',
        quote       = uOptions.quote     ?? '"',
        embed_quote = uOptions.quote     ?? (quote + quote),
        newline     = uOptions.newline   ?? '\r\n',
        curMax      = uCSV.length,
        nlLen       = newline.length,
        sepLen      = separator.length;

  let cursor   : number  = 0,
      inQuote  : boolean = false,
      output   : any[][] = [],
      row      : any[]   = [],
      cellFrom : number  = 0;

  while (cursor < curMax) {

    if (uCSV.substring(cursor, cursor + nlLen) === newline) {

      row.push(uCSV.substring(cellFrom, cursor));
      output.push(row);
      row       = [];
      cursor   += nlLen;
      cellFrom  = cursor;

    } else if (uCSV.substring(cursor, cursor + sepLen) === separator) {

      row.push(uCSV.substring(cellFrom, cursor));
      cursor   += sepLen;
      cellFrom  = cursor;

    } else {

      ++cursor;

    }

  }

  row.push(uCSV.substring(cellFrom, cursor));
  output.push(row);
  return output;

}





export {

  from_csv

};
