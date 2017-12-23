
type item = string;
type row  = item[];
type doc  = row[];



enum headerMode {

  none   = 'none',
  index  = 'index',
  number = 'number',
  first  = 'first'

};



enum quotingCircumstance {

  minimal        = 'minimal',
  always         = 'always',
  except_numbers = 'except_numbers',
  strict_nl      = 'strict_nl'

};



interface stringifyOptions {

  headers?                : row | false,
  quoter?                 : (s: string) => string,
  field_separator?        : string,
  row_separator?          : string,
  trailing_row_separator? : boolean

// , consumer: function
}



export { item, row, doc, headerMode, quotingCircumstance, stringifyOptions };
