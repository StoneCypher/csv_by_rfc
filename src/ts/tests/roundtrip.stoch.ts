
import * as assert from 'assert';
import * as fc     from 'fast-check';

import { from_csv, to_csv } from '../index';






describe('round trip stoch tests', () => {

  test("output must match input", () => 

    fc.assert(
      fc.property(

        fc.tuple(fc.nat({ max: 10 }), fc.nat({ max: 10 }))
          .chain( ([width, height]) =>
            fc.array(
              fc.array( fc.string(), { minLength: width, maxLength: width } ),
              { minLength: height, maxLength: height }
            )
          ),

        (grid) => {
          expect( from_csv( to_csv(grid) ) ).toBe(grid)
        }

       //  fc.tuple(fc.nat(), fc.nat()).chain([width, height] => 
       //   fc.array( 
       //     fc.array( fc.string(), { minLength: height, maxLength: height } ),
       //     { minLength: width, maxLength: width } 
       //   )

        // (grid) => {
        //  console.log(JSON.stringify(grid))
        // }

      )
    )

  );

});
