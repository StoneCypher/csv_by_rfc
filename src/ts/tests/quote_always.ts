
import {describe}     from 'ava-spec';
import {quote_always} from '../to_csv';





describe('quote_always', async it => {

  it('a',      t => t.is( '"a"',         quote_always('a')      ) );
  it('b"c',    t => t.is( '"b""c"',      quote_always('b"c')    ) );
  it('"d"',    t => t.is( '"""d"""',     quote_always('"d"')    ) );
  it('""e""',  t => t.is( '"""""e"""""', quote_always('""e""')  ) );
  it('f\ng',   t => t.is( '"f\ng"',      quote_always('f\ng')   ) );
  it('h\ri',   t => t.is( '"h\ri"',      quote_always('h\ri')   ) );
  it('j\r\nk', t => t.is( '"j\r\nk"',    quote_always('j\r\nk') ) );
  it('1',      t => t.is( '"1"',         quote_always('1')      ) );
  it('-2',     t => t.is( '"-2"',        quote_always('-2')     ) );
  it('+3',     t => t.is( '"+3"',        quote_always('+3')     ) );
  it('4.0',    t => t.is( '"4.0"',       quote_always('4.0')    ) );

});
