
import {test, describe} from 'ava-spec';
import {quoteFrame}     from '../to_csv';





describe('quoteFrame', async it => {

  it('a',     t => t.is( '"a"',         quoteFrame('a')     ) );
  it('b"c',   t => t.is( '"b""c"',      quoteFrame('b"c')   ) );
  it('"d"',   t => t.is( '"""d"""',     quoteFrame('"d"')   ) );
  it('""e""', t => t.is( '"""""e"""""', quoteFrame('""e""') ) );

});
