"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quoteFrame = (s) => `"${s.toString().replace(/"/g, '""')}"`;
exports.quoteFrame = quoteFrame;
const quoteWhenContains = (s, conts) => {
    const hasAnyItem = conts.some((d) => s.includes(d));
    return hasAnyItem ? quoteFrame(s) : s;
};
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
//# sourceMappingURL=to_csv.js.map