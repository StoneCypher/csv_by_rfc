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
//# sourceMappingURL=to_csv.js.map