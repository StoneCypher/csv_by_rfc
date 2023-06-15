
type Cell      = string;
type Row       = Cell[];
type BareCSV   = Row[];
type HeaderCSV = { headers?: Row; data: BareCSV };
type CSV       = HeaderCSV | BareCSV;





interface StringifyOptions {

  headers?          : Row | false,
  quoter?           : (s: Cell) => Cell,
  field_separator?  : string,
  newline?          : string

}



export { 
  Cell, Row,
  BareCSV, HeaderCSV, CSV, 
  StringifyOptions 
};
