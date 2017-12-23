
import {describe}    from 'ava-spec';
import {quote_frame} from '../to_csv';





describe('quote_frame', async it => {

  it('a',      t => t.is( '"a"',         quote_frame('a')      ) );
  it('b"c',    t => t.is( '"b""c"',      quote_frame('b"c')    ) );
  it('"d"',    t => t.is( '"""d"""',     quote_frame('"d"')    ) );
  it('""e""',  t => t.is( '"""""e"""""', quote_frame('""e""')  ) );
  it('f\ng',   t => t.is( '"f\ng"',      quote_frame('f\ng')   ) );
  it('h\ri',   t => t.is( '"h\ri"',      quote_frame('h\ri')   ) );
  it('j\r\nk', t => t.is( '"j\r\nk"',    quote_frame('j\r\nk') ) );

});
