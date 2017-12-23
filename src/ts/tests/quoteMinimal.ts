
import {describe}     from 'ava-spec';
import {quoteMinimal} from '../to_csv';





describe('quoteMinimal', async it => {

  it('a',      t => t.is( 'a',           quoteMinimal('a')      ) );
  it('b"c',    t => t.is( '"b""c"',      quoteMinimal('b"c')    ) );
  it('"d"',    t => t.is( '"""d"""',     quoteMinimal('"d"')    ) );
  it('""e""',  t => t.is( '"""""e"""""', quoteMinimal('""e""')  ) );
  it('f\ng',   t => t.is( '"f\ng"',      quoteMinimal('f\ng')   ) );
  it('h\ri',   t => t.is( '"h\ri"',      quoteMinimal('h\ri')   ) );
  it('j\r\nk', t => t.is( '"j\r\nk"',    quoteMinimal('j\r\nk') ) );
  it('1',      t => t.is( '1',           quoteMinimal('1')      ) );
  it('-2',     t => t.is( '-2',          quoteMinimal('-2')     ) );
  it('+3',     t => t.is( '+3',          quoteMinimal('+3')     ) );
  it('4.0',    t => t.is( '4.0',         quoteMinimal('4.0')    ) );

});
