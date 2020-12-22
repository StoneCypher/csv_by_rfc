
import {to_csv, quote_always} from '../to_csv';





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

  test("with quoter", () => expect(
    to_csv(
      [['a','b','c'],['1','2','3']],
      {quoter: quote_always}
    )
  ).toBe(
    '"a","b","c"\r\n"1","2","3"',
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
      {field_separator: ';'}
    )
  ).toBe(
    'a;b;c\r\n1;2;3',
  ) );

  test("with custom row separator", () => expect(
    to_csv(
      [['a','b','c'],['1','2','3']],
      {row_separator: '---'}
    )
  ).toBe(
    'a,b,c---1,2,3',
  ) );

  test("with trailing row separator", () => expect(
    to_csv(
      [['a','b','c'],['1','2','3']],
      {trailing_row_separator: true}
    )
  ).toBe(
    'a,b,c\r\n1,2,3\r\n',
  ) );

  test("with everything", () => expect(
    to_csv(
      [['a','b','c'],['1','2','3']],
      { quoter                 : quote_always,
        headers                : ['X','Y','Z'],
        field_separator        : ';',
        row_separator          : '---',
        trailing_row_separator : true
      }
    )
  ).toBe(
    '"X";"Y";"Z"---"a";"b";"c"---"1";"2";"3"---',
  ) );

});
