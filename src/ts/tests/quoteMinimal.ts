
import {describe}     from 'ava-spec';
import {quoteMinimal} from '../to_csv';





describe('quoteMinimal', async it => {

  it('a',     t => t.is( 'a',           quoteMinimal('a')     ) );
  it('b"c',   t => t.is( '"b""c"',      quoteMinimal('b"c')   ) );
  it('"d"',   t => t.is( '"""d"""',     quoteMinimal('"d"')   ) );
  it('""e""', t => t.is( '"""""e"""""', quoteMinimal('""e""') ) );

});
