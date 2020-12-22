
import {quote_always} from '../to_csv';





describe('quote_always', () => {

  test('a',      () => expect( quote_always( 'a' )      ).toBe( '"a"' )         );
  test('b"c',    () => expect( quote_always( 'b"c' )    ).toBe( '"b""c"' )      );
  test('"d"',    () => expect( quote_always( '"d"' )    ).toBe( '"""d"""' )     );
  test('""e""',  () => expect( quote_always( '""e""' )  ).toBe( '"""""e"""""' ) );
  test('f\ng',   () => expect( quote_always( 'f\ng' )   ).toBe( '"f\ng"' )      );
  test('h\ri',   () => expect( quote_always( 'h\ri' )   ).toBe( '"h\ri"' )      );
  test('j\r\nk', () => expect( quote_always( 'j\r\nk' ) ).toBe( '"j\r\nk"' )    );
  test('1',      () => expect( quote_always( '1' )      ).toBe( '"1"' )         );
  test('-2',     () => expect( quote_always( '-2' )     ).toBe( '"-2"' )        );
  test('+3',     () => expect( quote_always( '+3' )     ).toBe( '"+3"' )        );
  test('4.0',    () => expect( quote_always( '4.0' )    ).toBe( '"4.0"' )       );

});
