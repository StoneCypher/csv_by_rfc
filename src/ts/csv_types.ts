
type Cell      = string;
type Row       = Cell[];
type BareCSV   = Row[];
type HeaderCSV = { headers?: Row; data: BareCSV };
type CSV       = HeaderCSV | BareCSV;





enum HeaderMode {

  none   = 'none',
  index  = 'index',
  number = 'number',
  first  = 'first'

}



enum QuoteWhen {

  minimal        = 'minimal',
  always         = 'always',
  except_numbers = 'except_numbers',
  strict_nl      = 'strict_nl'

}



interface StringifyOptions {

  headers?                : Row | false,
  quoter?                 : (s: Cell) => Cell,
  field_separator?        : string,
  row_separator?          : string,
  trailing_row_separator? : boolean

}



export { 
  Cell, Row,
  BareCSV, HeaderCSV, CSV, 
  HeaderMode, QuoteWhen, 
  StringifyOptions 
};
