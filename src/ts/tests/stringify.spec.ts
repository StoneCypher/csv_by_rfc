
import { to_csv } from '../index';
import { 
  quote_always,
  quote_minimal,
  quote_strict_nl,
  quote_except_numbers
} from '../to_csv';





describe('to_csv', () => {

  test("abc/123", () => expect(
    to_csv([['a','b','c'],['1','2','3']])
  ).toBe(
    'a,b,c\r\n1,2,3',
  ) );

  test("embedded cr", () => expect(
    to_csv([['a','b\rc','d'],['1','2','3']])
  ).toBe(
    'a,"b\rc",d\r\n1,2,3',
  ) );

  test("embedded nl", () => expect(
    to_csv([['a','b\nc','d'],['1','2','3']])
  ).toBe(
    'a,"b\nc",d\r\n1,2,3',
  ) );

  test("embedded crnl", () => expect(
    to_csv([['a','b\r\nc','d'],['1','2','3']])
  ).toBe(
    'a,"b\r\nc",d\r\n1,2,3',
  ) );

  test("embedded quote", () => expect(
    to_csv([['a','b"c','d'],['1','2','3']])
  ).toBe(
    'a,"b""c",d\r\n1,2,3',
  ) );

  test("embedded twoquote", () => expect(
    to_csv([['a','b""c','d'],['1','2','3']])
  ).toBe(
    'a,"b""""c",d\r\n1,2,3',
  ) );

  test("quote_always", () => expect(
    to_csv(
      [['a','b','c'],['1','2','3']],
      {quoter: quote_always}
    )
  ).toBe(
    '"a","b","c"\r\n"1","2","3"',
  ) );

  test("quote_minimal", () => expect(
    to_csv(
      [['a','b,c','d'],['1','2','3']],
      {quoter: quote_minimal}
    )
  ).toBe(
    'a,"b,c",d\r\n1,2,3',
  ) );

  test("quote_strict_nl", () => expect(
    to_csv(
      [['a','\r','b'],['1','\n','2']],
      {quoter: quote_strict_nl}
    )
  ).toBe(
    'a,\r,b\r\n1,\n,2',
  ) );

  test("quote_except_numbers", () => expect(
    to_csv(
      [['a','b','c'],['1','2','3']],
      {quoter: quote_except_numbers}
    )
  ).toBe(
    '"a","b","c"\r\n1,2,3',
  ) );

  test("with headers", () => expect(
    to_csv(
      [['a','b','c'],['1','2','3']],
      {headers:['X','Y','Z']}
    )
  ).toBe(
    'X,Y,Z\r\na,b,c\r\n1,2,3',
  ) );

  test("with custom field separator", () => expect(
    to_csv(
      [['a','b','c'],['1','2','3']],
      { separator: ';' }
    )
  ).toBe(
    'a;b;c\r\n1;2;3',
  ) );

  test("with custom row separator", () => expect(
    to_csv(
      [['a','b','c'],['1','2','3']],
      { newline: '---' }
    )
  ).toBe(
    'a,b,c---1,2,3',
  ) );

  test("with everything", () => expect(
    to_csv(
      [['a','b','c'],['1','2','3']],
      { quoter     : quote_always,
        headers    : ['X','Y','Z'],
        separator  : ';',
        newline    : '---'
      }
    )
  ).toBe(
    '"X";"Y";"Z"---"a";"b";"c"---"1";"2";"3"',
  ) );

});
