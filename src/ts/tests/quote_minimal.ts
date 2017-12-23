
import {describe}      from 'ava-spec';
import {quote_minimal} from '../to_csv';





describe('quote_minimal', async it => {

  it('a',      t => t.is( 'a',           quote_minimal('a')      ) );
  it('b"c',    t => t.is( '"b""c"',      quote_minimal('b"c')    ) );
  it('"d"',    t => t.is( '"""d"""',     quote_minimal('"d"')    ) );
  it('""e""',  t => t.is( '"""""e"""""', quote_minimal('""e""')  ) );
  it('f\ng',   t => t.is( '"f\ng"',      quote_minimal('f\ng')   ) );
  it('h\ri',   t => t.is( '"h\ri"',      quote_minimal('h\ri')   ) );
  it('j\r\nk', t => t.is( '"j\r\nk"',    quote_minimal('j\r\nk') ) );
  it('1',      t => t.is( '1',           quote_minimal('1')      ) );
  it('-2',     t => t.is( '-2',          quote_minimal('-2')     ) );
  it('+3',     t => t.is( '+3',          quote_minimal('+3')     ) );
  it('4.0',    t => t.is( '4.0',         quote_minimal('4.0')    ) );

});
