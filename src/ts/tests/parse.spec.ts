
import { from_csv } from '../from_csv';





describe('from_csv', () => {

  test("abc/123", () => expect(
    from_csv('a,b,c\r\n1,2,3'),
  ).toEqual(
    [['a','b','c'],['1','2','3']]
  ) );

  test("abc/123", () => expect(
    from_csv('ab,cd,ef\r\n12,34,56'),
  ).toEqual(
    [['ab','cd','ef'],['12','34','56']]
  ) );

});
