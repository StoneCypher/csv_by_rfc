
import { from_csv } from '../index';





describe('basic from_csv', () => {

  test("one char: a,b,c\\r\\n1,2,3", () => expect(
    from_csv('a,b,c\r\n1,2,3'),
  ).toEqual(
    [['a','b','c'],['1','2','3']]
  ) );

  test("two char: ab,cd,ef\\r\\n12,34,56", () => expect(
    from_csv('ab,cd,ef\r\n12,34,56'),
  ).toEqual(
    [['ab','cd','ef'],['12','34','56']]
  ) );

  test("quoted field: ab,\"cd,ef\",gh\\r\\n12,34,56", () => expect(
    from_csv('ab,"cd,ef",gh\r\n12,34,56'),
  ).toEqual(
    [['ab','cd,ef','gh'],['12','34','56']]
  ) );

  test("embedded quote: ab,\"cd,e\"\"f\",gh\\r\\n12,34,56", () => expect(
    from_csv('ab,"cd,e\"\"f",gh\r\n12,34,56'),
  ).toEqual(
    [['ab','cd,e"f','gh'],['12','34','56']]
  ) );

  test("empty:", () => expect(
    from_csv(''),
  ).toEqual(
    []
  ) );

});





describe('nonstandard from_csv', () => {

  test("semicolon separator: a;b;c\\r\\n1;2;3", () => expect(
    from_csv('a;b;c\r\n1;2;3', { separator: ';' }),
  ).toEqual(
    [['a','b','c'],['1','2','3']]
  ) );

  test("tab separator: a\\tb\\tc\\r\\n1\\t2\\t3", () => expect(
    from_csv('a\tb\tc\r\n1\t2\t3', { separator: '\t' }),
  ).toEqual(
    [['a','b','c'],['1','2','3']]
  ) );

  test("single quote: a,'b,c',d\\r\\n1,2,3", () => expect(
    from_csv("a,'b,c',d\r\n1,2,3", { quote: "'" }),
  ).toEqual(
    [['a','b,c','d'],['1','2','3']]
  ) );

  test('embed quote as backslash: aa,"bb,c\\"c",d\\r\\n1,2,3', () => expect(
    from_csv('aa,"bb,c\\"c",d\r\n1,2,3', { embed_quote: '\\"' }),
  ).toEqual(
    [['aa','bb,c"c','d'],['1','2','3']]
  ) );

  test("unix newline: a,b,c\\n1,2,3", () => expect(
    from_csv('a,b,c\n1,2,3', { newline: '\n' }),
  ).toEqual(
    [['a','b','c'],['1','2','3']]
  ) );

  test("old mac newline: a,b,c\\r1,2,3", () => expect(
    from_csv('a,b,c\r1,2,3', { newline: '\r' }),
  ).toEqual(
    [['a','b','c'],['1','2','3']]
  ) );

});





describe('headers', () => {

  test("ha,b,c\\r\\nh1,2,3\\r\\nh2,4,5", () => expect(
    from_csv('ha,b,c\r\nh1,2,3\r\nh2,4,5', { has_headers: true }),
  ).toEqual(
    { headers: ['ha','b','c'], data: [ ['h1','2','3'], ['h2','4','5'] ] }
  ) );

  test("headers when empty:", () => expect(
    from_csv('', { has_headers: true }),
  ).toEqual(
    { headers: [], data: [] }
  ) );

});





describe('from_csv negative tests', () => {

  test("data before quote", () => 
  	expect( () => from_csv('ab,"cd",e"fg"\r\n1,2,3') )
      .toThrow() );

  test("data after close quote", () => 
  	expect( () => from_csv('ab,"cd","ef"g\r\n1,2,3') )
      .toThrow() );

});
