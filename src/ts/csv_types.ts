
type Cell      = string;
type Row       = Cell[];
type BareCSV   = Row[];
type HeaderCSV = { headers?: Row; data: BareCSV };
type CSV       = HeaderCSV | BareCSV;





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
  StringifyOptions 
};
