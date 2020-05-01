import string from './string';
import assert from 'assert';

describe('String Helpers', () => {
    it('slugify', () => {
        assert.strictEqual(
            string.slugify('erwin gaitan ospino'),
            'erwin-gaitan-ospino'
        );

        assert.strictEqual(
            string.slugify('  gaitan ospino  '),
            'gaitan-ospino'
        );

        assert.strictEqual(
            string.slugify('yo hablo español y hasta máéíóús'),
            'yo-hablo-espanol-y-hasta-maeious'
        );
    });

    it('capitalizeStr', () => {
        assert.strictEqual(string.capitalizeStr('ohmama'), 'Ohmama');
    });

    it('getReadTime', () => {
        assert.strictEqual(string.getReadTime('erwin gaitan ospino'), 1);
    });

    it('unescapeHtml', () => {
        assert.strictEqual(
            string.unescapeHtml(
                '&lt;div&gt;&quot;amazing&quot; &amp; &#039;fabulous&#039;' +
                    '&lt;/div&gt;'
            ),
            `<div>"amazing" & 'fabulous'</div>`
        );
    });
});
