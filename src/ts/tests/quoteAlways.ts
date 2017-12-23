
import {describe}    from 'ava-spec';
import {quoteAlways} from '../to_csv';





describe('quoteAlways', async it => {

  it('a',      t => t.is( '"a"',         quoteAlways('a')      ) );
  it('b"c',    t => t.is( '"b""c"',      quoteAlways('b"c')    ) );
  it('"d"',    t => t.is( '"""d"""',     quoteAlways('"d"')    ) );
  it('""e""',  t => t.is( '"""""e"""""', quoteAlways('""e""')  ) );
  it('f\ng',   t => t.is( '"f\ng"',      quoteAlways('f\ng')   ) );
  it('h\ri',   t => t.is( '"h\ri"',      quoteAlways('h\ri')   ) );
  it('j\r\nk', t => t.is( '"j\r\nk"',    quoteAlways('j\r\nk') ) );
  it('1',      t => t.is( '"1"',         quoteAlways('1')      ) );
  it('-2',     t => t.is( '"-2"',        quoteAlways('-2')     ) );
  it('+3',     t => t.is( '"+3"',        quoteAlways('+3')     ) );
  it('4.0',    t => t.is( '"4.0"',       quoteAlways('4.0')    ) );

});
