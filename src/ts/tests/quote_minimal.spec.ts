
import {quote_minimal} from '../to_csv';





describe('quote_minimal', () => {

  test('a',      () => expect( quote_minimal('a')      ).toBe( 'a' )           );
  test('b"c',    () => expect( quote_minimal('b"c')    ).toBe( '"b""c"' )      );
  test('"d"',    () => expect( quote_minimal('"d"')    ).toBe( '"""d"""' )     );
  test('""e""',  () => expect( quote_minimal('""e""')  ).toBe( '"""""e"""""' ) );
  test('f\ng',   () => expect( quote_minimal('f\ng')   ).toBe( '"f\ng"' )      );
  test('h\ri',   () => expect( quote_minimal('h\ri')   ).toBe( '"h\ri"' )      );
  test('j\r\nk', () => expect( quote_minimal('j\r\nk') ).toBe( '"j\r\nk"' )    );
  test('1',      () => expect( quote_minimal('1')      ).toBe( '1' )           );
  test('-2',     () => expect( quote_minimal('-2')     ).toBe( '-2' )          );
  test('+3',     () => expect( quote_minimal('+3')     ).toBe( '+3' )          );
  test('4.0',    () => expect( quote_minimal('4.0')    ).toBe( '4.0' )         );

});
