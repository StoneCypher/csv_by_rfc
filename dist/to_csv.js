"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function quoteFrame(s) {
    return `"${s.toString().replace(/"/g, '""')}"`;
}
exports.quoteFrame = quoteFrame;
function quoteWhenContains(s, conts) {
    const hasAnyItem = conts.some((d) => s.includes(d));
    return hasAnyItem ? quoteFrame(s) : s;
}
exports.quoteWhenContains = quoteWhenContains;
function quoteAlways(c) {
    return quoteFrame(c);
}
exports.quoteAlways = quoteAlways;
function quoteMinimal(c) {
    return quoteWhenContains(c, ['\r', '\n', ',', '"']);
}
exports.quoteMinimal = quoteMinimal;
function quoteStrictNL(c) {
    return quoteWhenContains(c, ['\r\n', ',', '"']);
}
exports.quoteStrictNL = quoteStrictNL;
function quoteExceptNumbers(c) {
    return /^[0-9.+-]*$/.test(c) ? c : quoteFrame(c);
}
exports.quoteExceptNumbers = quoteExceptNumbers;
function stringifyMakeRow(rowdata, quoter, field_separator) {
    return rowdata.map(quoter)
        .join(field_separator);
}
exports.stringifyMakeRow = stringifyMakeRow;
function stringify(data, { headers = false, quoter = quoteMinimal, field_separator = ',', row_separator = '\r\n', trailing_row_separator = false } = {}) {
    const header = headers ? (stringifyMakeRow(headers, quoter, field_separator) + row_separator)
        : '';
    const body = data.map((hd) => stringifyMakeRow(hd, quoter, field_separator))
        .join(row_separator);
    return header + body + (trailing_row_separator ? row_separator : '');
}
exports.stringify = stringify;
const quoters = {
    minimal: quoteMinimal,
    always: quoteAlways,
    except_numbers: quoteExceptNumbers,
    strict_nl: quoteStrictNL
};
exports.quoters = quoters;
//# sourceMappingURL=to_csv.js.map