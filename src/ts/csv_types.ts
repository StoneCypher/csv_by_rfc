
type item = string;
type row  = item[];
type doc  = row[];



enum header_mode {

  none   = 'none',
  index  = 'index',
  number = 'number',
  first  = 'first'

};



enum quoting_circumstance {

  minimal        = 'minimal',
  always         = 'always',
  except_numbers = 'except_numbers',
  strict_nl      = 'strict_nl'

};



interface stringify_options {

  headers?                : row | false,
  quoter?                 : (s: string) => string,
  field_separator?        : string,
  row_separator?          : string,
  trailing_row_separator? : boolean

// , consumer: function
}



export { item, row, doc, header_mode, quoting_circumstance, stringify_options };
