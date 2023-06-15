
import { stringify_make_row, quote_minimal, quote_always } from '../to_csv';





describe('stringify_make_row', () => {

  test("['a','b','c']", () =>
    expect( stringify_make_row(['a','b','c'], quote_minimal, ',', '\r\n', '"', '""') ).toBe( 'a,b,c' ) );

  test("['a','b','c']", () =>
    expect( stringify_make_row(['a','b','c'], quote_always,  ';', '\r\n', '"', '""') ).toBe( '"a";"b";"c"' ) );

});
