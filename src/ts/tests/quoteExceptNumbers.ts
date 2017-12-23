
import {describe}     from 'ava-spec';
import {quoteExceptNumbers} from '../to_csv';





describe('quoteExceptNumbers', async it => {

  it('a',      t => t.is( '"a"',         quoteExceptNumbers('a')      ) );
  it('b"c',    t => t.is( '"b""c"',      quoteExceptNumbers('b"c')    ) );
  it('"d"',    t => t.is( '"""d"""',     quoteExceptNumbers('"d"')    ) );
  it('""e""',  t => t.is( '"""""e"""""', quoteExceptNumbers('""e""')  ) );
  it('f\ng',   t => t.is( '"f\ng"',      quoteExceptNumbers('f\ng')   ) );
  it('h\ri',   t => t.is( '"h\ri"',      quoteExceptNumbers('h\ri')   ) );
  it('j\r\nk', t => t.is( '"j\r\nk"',    quoteExceptNumbers('j\r\nk') ) );
  it('1',      t => t.is( '1',           quoteExceptNumbers('1')      ) );
  it('-2',     t => t.is( '-2',          quoteExceptNumbers('-2')     ) );
  it('+3',     t => t.is( '+3',          quoteExceptNumbers('+3')     ) );
  it('4.0',    t => t.is( '4.0',         quoteExceptNumbers('4.0')    ) );

});
