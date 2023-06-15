
import { quote_frame } from '../to_csv';





describe('quote_frame', () => {

  test('a',      () => expect( quote_frame('a',      '"', '""') ).toBe('"a"')         );
  test('b"c',    () => expect( quote_frame('b"c',    '"', '""') ).toBe('"b""c"')      );
  test('"d"',    () => expect( quote_frame('"d"',    '"', '""') ).toBe('"""d"""')     );
  test('""e""',  () => expect( quote_frame('""e""',  '"', '""') ).toBe('"""""e"""""') );
  test('f\ng',   () => expect( quote_frame('f\ng',   '"', '""') ).toBe('"f\ng"')      );
  test('h\ri',   () => expect( quote_frame('h\ri',   '"', '""') ).toBe('"h\ri"')      );
  test('j\r\nk', () => expect( quote_frame('j\r\nk', '"', '""') ).toBe('"j\r\nk"')    );

  test('a',      () => expect( quote_frame("a",      "'", "''") ).toBe("'a'")         );
  test('b"c',    () => expect( quote_frame("b'c",    "'", "''") ).toBe("'b''c'")      );
  test('"d"',    () => expect( quote_frame("'d'",    "'", "''") ).toBe("'''d'''")     );
  test('""e""',  () => expect( quote_frame("''e''",  "'", "''") ).toBe("'''''e'''''") );
  test('f\ng',   () => expect( quote_frame("f\ng",   "'", "''") ).toBe("'f\ng'")      );
  test('h\ri',   () => expect( quote_frame("h\ri",   "'", "''") ).toBe("'h\ri'")      );
  test('j\r\nk', () => expect( quote_frame("j\r\nk", "'", "''") ).toBe("'j\r\nk'")    );

});
