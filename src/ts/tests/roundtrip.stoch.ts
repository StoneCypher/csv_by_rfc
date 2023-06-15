
import * as assert from 'assert';
import * as fc     from 'fast-check';

import { from_csv, to_csv } from '../index';
import { HeaderCSV }        from '../csv_types';






describe('round trip stoch tests', () => {

  function inline_headers(hc: HeaderCSV) {
    let inlined = hc.data.slice();
    if (hc.headers === undefined) { throw new Error('Need headers in test'); }
    inlined.unshift(hc.headers);
    return inlined;
  }

  test("no headers", () => 

    fc.assert(
      fc.property(

        fc.tuple(
            fc.integer({ min: 1, max: 7 }), 
            fc.integer({ min: 1, max: 7 })
          ).chain( ([width, height]) =>
            fc.array(
              fc.array( fc.string(), { minLength: width, maxLength: width } ),
              { minLength: height, maxLength: height }
            )
          ),

        (grid) => {
          expect( from_csv( to_csv(grid) ) ).toStrictEqual(grid)
        }

      )
    )

  );

  test("headers", () => 

    fc.assert(
      fc.property(

        fc.tuple(
            fc.integer({ min: 1, max: 7 }), 
            fc.integer({ min: 2, max: 7 })
          ).chain( ([width, height]) =>
            fc.array(
              fc.array( fc.string(), { minLength: width, maxLength: width } ),
              { minLength: height, maxLength: height }
            )
          ),

        (grid) => {
          expect( inline_headers( from_csv( to_csv(grid), { has_headers: true } ) as HeaderCSV ) )
            .toStrictEqual(grid)
        }

      )
    )

  );

});





describe('from_csv negative tests', () => {

  test("rows must be same length", () => 
    expect( () => from_csv('a,b,c,d\r\n1,2,3') )
      .toThrow() );

  test("rows must be same length as headers", () => 
    expect( () => from_csv('a,b,c,d\r\n1,2,3\r\n4,5,6', { has_headers: true }) )
      .toThrow() );

  test("data before quote", () => 
    expect( () => from_csv('ab,"cd",e"fg"\r\n1,2,3') )
      .toThrow() );

  test("data before quote", () => 
    expect( () => from_csv('ab,"cd",e"fg"\r\n1,2,3') )
      .toThrow() );

  test("data after close quote", () => 
    expect( () => from_csv('ab,"cd","ef"g\r\n1,2,3') )
      .toThrow() );

  test("bad embed quote - matching", () =>
    expect( () => from_csv('a', { quote: "zz", embed_quote: "zz" }) )
      .toThrow() );

  test("bad embed quote - subset", () =>
    expect( () => from_csv('a', { quote: "zzz", embed_quote: "zz" }) )
      .toThrow() );

});
