"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.from_csv = void 0;
function from_csv(uCSV, uOptions = {}) {
    var _a, _b, _c, _d, _e;
    const separator = (_a = uOptions.separator) !== null && _a !== void 0 ? _a : ',', quote = (_b = uOptions.quote) !== null && _b !== void 0 ? _b : '"', embed_quote = (_c = uOptions.embed_quote) !== null && _c !== void 0 ? _c : (quote + quote), newline = (_d = uOptions.newline) !== null && _d !== void 0 ? _d : '\r\n', hasHeaders = (_e = uOptions.has_headers) !== null && _e !== void 0 ? _e : false, curMax = uCSV.length, nlLen = newline.length, sepLen = separator.length, qtLen = quote.length, eqLen = embed_quote.length;
    if (quote.indexOf(embed_quote) > -1) {
        throw new Error('.embed_quote cannot match or be a subset of .quote');
    }
    let cursor = 0, newCell = true, inQuote = false, afterClose = false, output = [], row = [], cell = '';
    while (cursor < curMax) {
        if (inQuote) {
            if (uCSV.substring(cursor, cursor + eqLen) === embed_quote) {
                cell += quote;
                cursor += eqLen;
                newCell = false;
                afterClose = false;
            }
            else if (uCSV.substring(cursor, cursor + qtLen) === quote) {
                // it gets pushed at the separator, not here
                inQuote = false;
                cursor += qtLen;
                newCell = false; // not until the separator
                afterClose = true;
            }
            else {
                cell += uCSV.charAt(cursor);
                newCell = false;
                afterClose = false;
                ++cursor;
            }
        }
        else {
            if (uCSV.substring(cursor, cursor + qtLen) === quote) {
                if (newCell) {
                    inQuote = true;
                    cursor += qtLen;
                    newCell = false;
                    afterClose = false;
                }
                else {
                    throw new Error(`quotes may only begin cells, at ${cursor}`);
                }
            }
            else if (uCSV.substring(cursor, cursor + nlLen) === newline) {
                row.push(cell);
                cell = '';
                output.push(row);
                row = [];
                cursor += nlLen;
                newCell = true;
                afterClose = false;
            }
            else if (uCSV.substring(cursor, cursor + sepLen) === separator) {
                row.push(cell);
                cell = '';
                cursor += sepLen;
                newCell = true;
                afterClose = false;
            }
            else {
                if (afterClose) {
                    throw new Error(`cannot have data after close quote, before separator, at ${cursor}`);
                }
                cell += uCSV.charAt(cursor);
                newCell = false;
                afterClose = false;
                ++cursor;
            }
        }
    }
    row.push(cell);
    output.push(row);
    // assert all rows, and if appropriate headers, have same length
    output.map((eachrow, e) => {
        if (eachrow.length !== output[0].length) {
            throw new Error(`Row ${e} is of wrong length`);
        }
    });
    if (hasHeaders) {
        const headers = output.shift(); // typechecker expects undef from .shift, but .push was prev line, so impossible to test; explicitly opt out of undef test
        return {
            headers: headers,
            data: output.length === 0
                ? [[""]]
                : output
        };
    }
    else {
        return output;
    }
}
exports.from_csv = from_csv;
//# sourceMappingURL=from_csv.js.map