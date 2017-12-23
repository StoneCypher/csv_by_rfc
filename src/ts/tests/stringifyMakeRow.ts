
import {describe}                                    from 'ava-spec';
import {stringifyMakeRow, quoteMinimal, quoteAlways} from '../to_csv';





describe('stringifyMakeRow', async it => {

  it("['a','b','c']", t => t.is( 'a,b,c',       stringifyMakeRow(['a','b','c'], quoteMinimal, ',') ) );
  it("['a','b','c']", t => t.is( '"a";"b";"c"', stringifyMakeRow(['a','b','c'], quoteAlways,  ';') ) );

});
