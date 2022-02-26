function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
  var to = 'aaaaaeeeeeiiiiooooouuuunc------';

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  return str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes
}

function getReadTime(text: string) {
  if (!text) {
    return 0;
  }

  const WORDS_PER_MINUTE = 250;
  const wordsLength = text.match(/\w{3,}/g);

  if (!wordsLength) {
    return 0;
  }

  return Math.ceil(wordsLength.length / WORDS_PER_MINUTE);
}

function capitalizeStr(str: string) {
  return str.replace(/(?:^|\s)\S/g, (a) => {
    return a.toUpperCase();
  });
}

function unescapeHtml(str: string) {
  return (
    str
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      // eslint-disable-next-line
      .replace(/&#039;/g, "'")
  );
}

export = {
  slugify,
  getReadTime,
  capitalizeStr,
  unescapeHtml,
};
