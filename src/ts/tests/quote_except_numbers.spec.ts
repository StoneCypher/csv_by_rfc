
import {quote_except_numbers} from '../to_csv';





describe('quote_except_numbers', () => {

  test('a',      () => expect( quote_except_numbers('a')      ).toBe('"a"')         );
  test('b"c',    () => expect( quote_except_numbers('b"c')    ).toBe('"b""c"')      );
  test('"d"',    () => expect( quote_except_numbers('"d"')    ).toBe('"""d"""')     );
  test('""e""',  () => expect( quote_except_numbers('""e""')  ).toBe('"""""e"""""') );
  test('f\ng',   () => expect( quote_except_numbers('f\ng')   ).toBe('"f\ng"')      );
  test('h\ri',   () => expect( quote_except_numbers('h\ri')   ).toBe('"h\ri"')      );
  test('j\r\nk', () => expect( quote_except_numbers('j\r\nk') ).toBe('"j\r\nk"')    );
  test('1',      () => expect( quote_except_numbers('1')      ).toBe('1')           );
  test('-2',     () => expect( quote_except_numbers('-2')     ).toBe('-2')          );
  test('+3',     () => expect( quote_except_numbers('+3')     ).toBe('+3')          );
  test('4.0',    () => expect( quote_except_numbers('4.0')    ).toBe('4.0')         );

});
