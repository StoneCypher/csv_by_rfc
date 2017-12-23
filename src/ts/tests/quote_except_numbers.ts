
import {describe}             from 'ava-spec';
import {quote_except_numbers} from '../to_csv';





describe('quote_except_numbers', async it => {

  it('a',      t => t.is( '"a"',         quote_except_numbers('a')      ) );
  it('b"c',    t => t.is( '"b""c"',      quote_except_numbers('b"c')    ) );
  it('"d"',    t => t.is( '"""d"""',     quote_except_numbers('"d"')    ) );
  it('""e""',  t => t.is( '"""""e"""""', quote_except_numbers('""e""')  ) );
  it('f\ng',   t => t.is( '"f\ng"',      quote_except_numbers('f\ng')   ) );
  it('h\ri',   t => t.is( '"h\ri"',      quote_except_numbers('h\ri')   ) );
  it('j\r\nk', t => t.is( '"j\r\nk"',    quote_except_numbers('j\r\nk') ) );
  it('1',      t => t.is( '1',           quote_except_numbers('1')      ) );
  it('-2',     t => t.is( '-2',          quote_except_numbers('-2')     ) );
  it('+3',     t => t.is( '+3',          quote_except_numbers('+3')     ) );
  it('4.0',    t => t.is( '4.0',         quote_except_numbers('4.0')    ) );

});
