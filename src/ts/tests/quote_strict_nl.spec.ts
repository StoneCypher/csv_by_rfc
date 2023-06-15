
import { quote_strict_nl } from '../to_csv';





describe('quote_strict_nl', () => {

  test('a',      () => expect( quote_strict_nl('a')      ).toBe('a')           );
  test('b"c',    () => expect( quote_strict_nl('b"c')    ).toBe('"b""c"')      );
  test('"d"',    () => expect( quote_strict_nl('"d"')    ).toBe('"""d"""')     );
  test('""e""',  () => expect( quote_strict_nl('""e""')  ).toBe('"""""e"""""') );
  test('f\ng',   () => expect( quote_strict_nl('f\ng')   ).toBe('f\ng')        );
  test('h\ri',   () => expect( quote_strict_nl('h\ri')   ).toBe('h\ri')        );
  test('j\r\nk', () => expect( quote_strict_nl('j\r\nk') ).toBe('"j\r\nk"')    );
  test('1',      () => expect( quote_strict_nl('1')      ).toBe('1')           );
  test('-2',     () => expect( quote_strict_nl('-2')     ).toBe('-2')          );
  test('+3',     () => expect( quote_strict_nl('+3')     ).toBe('+3')          );
  test('4.0',    () => expect( quote_strict_nl('4.0')    ).toBe('4.0')         );

});
