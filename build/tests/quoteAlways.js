"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_spec_1 = require("ava-spec");
const to_csv_1 = require("../to_csv");
ava_spec_1.describe('quoteAlways', (it) => __awaiter(this, void 0, void 0, function* () {
    it('a', t => t.is('"a"', to_csv_1.quoteAlways('a')));
    it('b"c', t => t.is('"b""c"', to_csv_1.quoteAlways('b"c')));
    it('"d"', t => t.is('"""d"""', to_csv_1.quoteAlways('"d"')));
    it('""e""', t => t.is('"""""e"""""', to_csv_1.quoteAlways('""e""')));
}));
//# sourceMappingURL=quoteAlways.js.map