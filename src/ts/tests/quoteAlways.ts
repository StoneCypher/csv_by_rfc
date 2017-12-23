
import {describe}    from 'ava-spec';
import {quoteAlways} from '../to_csv';





describe('quoteAlways', async it => {

  it('a',     t => t.is( '"a"',         quoteAlways('a')     ) );
  it('b"c',   t => t.is( '"b""c"',      quoteAlways('b"c')   ) );
  it('"d"',   t => t.is( '"""d"""',     quoteAlways('"d"')   ) );
  it('""e""', t => t.is( '"""""e"""""', quoteAlways('""e""') ) );

});
