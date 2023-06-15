
type Cell      = string;
type Row       = Cell[];
type BareCSV   = Row[];
type HeaderCSV = { headers?: Row; data: BareCSV };
type CSV       = HeaderCSV | BareCSV;





interface StringifyOptions {

  headers?     : Row | false,
  quoter?      : (c: Cell, sep: string, nl: string, quote: string, emquot: string) => Cell,
  separator?   : string,
  newline?     : string,
  quote?       : string,
  embed_quote? : string

}



export { 
  Cell, Row,
  BareCSV, HeaderCSV, CSV, 
  StringifyOptions 
};
