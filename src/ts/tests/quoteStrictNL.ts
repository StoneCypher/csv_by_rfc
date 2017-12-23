
import {describe}     from 'ava-spec';
import {quoteStrictNL} from '../to_csv';





describe('quoteStrictNL', async it => {

  it('a',      t => t.is( 'a',           quoteStrictNL('a')      ) );
  it('b"c',    t => t.is( '"b""c"',      quoteStrictNL('b"c')    ) );
  it('"d"',    t => t.is( '"""d"""',     quoteStrictNL('"d"')    ) );
  it('""e""',  t => t.is( '"""""e"""""', quoteStrictNL('""e""')  ) );
  it('f\ng',   t => t.is( 'f\ng',        quoteStrictNL('f\ng')   ) );
  it('h\ri',   t => t.is( 'h\ri',        quoteStrictNL('h\ri')   ) );
  it('j\r\nk', t => t.is( '"j\r\nk"',    quoteStrictNL('j\r\nk') ) );

});
