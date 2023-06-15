
import { from_csv } from '../index';





describe('basic from_csv', () => {

  test("a,b,c\\r\\n1,2,3", () => expect(
    from_csv('a,b,c\r\n1,2,3'),
  ).toEqual(
    [['a','b','c'],['1','2','3']]
  ) );

  test("ab,cd,ef\\r\\n12,34,56", () => expect(
    from_csv('ab,cd,ef\r\n12,34,56'),
  ).toEqual(
    [['ab','cd','ef'],['12','34','56']]
  ) );

  test("ab,\"cd,ef\",gh\\r\\n12,34,56", () => expect(
    from_csv('ab,"cd,ef",gh\r\n12,34,56'),
  ).toEqual(
    [['ab','cd,ef','gh'],['12','34','56']]
  ) );

});





describe('headers', () => {

  test("ha,b,c\\r\\nh1,2,3", () => expect(
    from_csv('ha,b,c\r\nh1,2,3\r\nh2,4,5', { has_headers: true }),
  ).toEqual(
    { headers: ['ha','b','c'], data: [ ['h1','2','3'], ['h2','4','5'] ] }
  ) );

});
