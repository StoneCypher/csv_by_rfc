
import {describe}        from 'ava-spec';
import {quote_strict_nl} from '../to_csv';





describe('quote_strict_nl', async it => {

  it('a',      t => t.is( 'a',           quote_strict_nl('a')      ) );
  it('b"c',    t => t.is( '"b""c"',      quote_strict_nl('b"c')    ) );
  it('"d"',    t => t.is( '"""d"""',     quote_strict_nl('"d"')    ) );
  it('""e""',  t => t.is( '"""""e"""""', quote_strict_nl('""e""')  ) );
  it('f\ng',   t => t.is( 'f\ng',        quote_strict_nl('f\ng')   ) );
  it('h\ri',   t => t.is( 'h\ri',        quote_strict_nl('h\ri')   ) );
  it('j\r\nk', t => t.is( '"j\r\nk"',    quote_strict_nl('j\r\nk') ) );
  it('1',      t => t.is( '1',           quote_strict_nl('1')      ) );
  it('-2',     t => t.is( '-2',          quote_strict_nl('-2')     ) );
  it('+3',     t => t.is( '+3',          quote_strict_nl('+3')     ) );
  it('4.0',    t => t.is( '4.0',         quote_strict_nl('4.0')    ) );

});
