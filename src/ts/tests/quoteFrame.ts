
import {describe}   from 'ava-spec';
import {quoteFrame} from '../to_csv';





describe('quoteFrame', async it => {

  it('a',      t => t.is( '"a"',         quoteFrame('a')      ) );
  it('b"c',    t => t.is( '"b""c"',      quoteFrame('b"c')    ) );
  it('"d"',    t => t.is( '"""d"""',     quoteFrame('"d"')    ) );
  it('""e""',  t => t.is( '"""""e"""""', quoteFrame('""e""')  ) );
  it('f\ng',   t => t.is( '"f\ng"',      quoteFrame('f\ng')   ) );
  it('h\ri',   t => t.is( '"h\ri"',      quoteFrame('h\ri')   ) );
  it('j\r\nk', t => t.is( '"j\r\nk"',    quoteFrame('j\r\nk') ) );

});
