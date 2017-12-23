
import { quotingCircumstance } from './csv_types';






const quoteFrame = (s: string): string =>

  `"${s.toString().replace(/"/g,'""')}"`;





const quoteWhenContains = (s: string, conts: Array<string>): string => {

  return (conts.some( (d:any) => s.includes(d) ))? quoteFrame(s) : s;

};





const quoteAlways  = (c: string): string => quoteFrame(c),
      quoteMinimal = (c: string): string => quoteWhenContains(c, ['\r', '\n', ',', '"']);





export { quoteFrame, quoteAlways, quoteMinimal };
