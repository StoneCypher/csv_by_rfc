
import { quotingCircumstance } from './csv_types';






const quoteFrame = (s: string): string =>

  `"${s.toString().replace(/"/g,'""')}"`;





const quoteWhenContains = (s: string, conts: Array<string>): string => {

  const hasAnyItem = conts.some( (d: string) => s.includes(d) );
  return hasAnyItem? quoteFrame(s) : s;

};





function quoteAlways(c: string): string {
  return quoteFrame(c);
}





function quoteMinimal(c: string): string {
  return quoteWhenContains(c, ['\r', '\n', ',', '"']);
}





function quoteStrictNL(c: string): string {
  return quoteWhenContains(c, ['\r\n',     ',', '"']);
}





export { quoteFrame, quoteAlways, quoteMinimal, quoteStrictNL };
