"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var string_1 = __importDefault(require("./string"));
var assert_1 = __importDefault(require("assert"));
describe('String Helpers', function () {
    it('slugify', function () {
        assert_1.default.strictEqual(string_1.default.slugify('erwin gaitan ospino'), 'erwin-gaitan-ospino');
        assert_1.default.strictEqual(string_1.default.slugify('  gaitan ospino  '), 'gaitan-ospino');
        assert_1.default.strictEqual(string_1.default.slugify('yo hablo español y hasta máéíóús'), 'yo-hablo-espanol-y-hasta-maeious');
    });
    it('capitalizeStr', function () {
        assert_1.default.strictEqual(string_1.default.capitalizeStr('ohmama'), 'Ohmama');
    });
    it('getReadTime', function () {
        assert_1.default.strictEqual(string_1.default.getReadTime('erwin gaitan ospino'), 1);
    });
    it('unescapeHtml', function () {
        assert_1.default.strictEqual(string_1.default.unescapeHtml('&lt;div&gt;&quot;amazing&quot; &amp; &#039;fabulous&#039;' +
            '&lt;/div&gt;'), "<div>\"amazing\" & 'fabulous'</div>");
    });
});
