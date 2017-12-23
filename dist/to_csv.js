"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quoteFrame = (s) => `"${s.toString().replace(/"/g, '""')}"`;
exports.quoteFrame = quoteFrame;
const quoteWhenContains = (s, conts) => {
    return (conts.some((d) => s.includes(d))) ? quoteFrame(s) : s;
};
const quoteAlways = (c) => quoteFrame(c), quoteMinimal = (c) => quoteWhenContains(c, ['\r', '\n', ',', '"']);
exports.quoteAlways = quoteAlways;
exports.quoteMinimal = quoteMinimal;
//# sourceMappingURL=to_csv.js.map