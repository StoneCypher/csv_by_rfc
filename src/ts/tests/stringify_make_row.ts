
import {describe}                                        from 'ava-spec';
import {stringify_make_row, quote_minimal, quote_always} from '../to_csv';





describe('stringify_make_row', async it => {

  it("['a','b','c']", t => t.is( 'a,b,c',       stringify_make_row(['a','b','c'], quote_minimal, ',') ) );
  it("['a','b','c']", t => t.is( '"a";"b";"c"', stringify_make_row(['a','b','c'], quote_always,  ';') ) );

});
