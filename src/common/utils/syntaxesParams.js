export const syntaxesParams = {
  codeJS: {
    tokenSplit: /[^\s.,!?;:(){}'«»\-–—]+|[\s.,!?;:(){}'«»\-–—]|"(.*?)"/g,
    highlightedSyntaxes: [
      { class: "js-keywords", regex: /(const|let|function|if|else)/ },
      { class: "js-punctuation", regex: /[(){}'[\]]/ },
      { class: "js-string", regex: /"(.*?)"/ },
      { class: "js-numbers", regex: /\d/ },
      { class: "return", regex: "return" },
    ],
  },
  codeCSS: {
    tokenSplit: /[^\s,!?;:(){}"'«»\d]+|[\s,!?;:(){}"'«»\d]/g,
    highlightedSyntaxes: [
      { class: "css-class", regex: /\.([a-zA-Z0-9_-]+)/g },
      { class: "css-punctuation", regex: /[(){}'[\]]/ },
      { class: "css-numbers", regex: /\d/ },
    ],
  },
  codeHTML: {
    tokenSplit: /<(.*?)>|\w+|\s|[,!?;:(){}"'\-–—[\]<>=/]/g,
    subTokenSplit:
      /"(.*?)"|&lt;\w+|&lt;\/\w+|\w+|\s|&lt;|&gt;|[,!?;:(){}"'\-–—[\]|=/]/g,
    // *** *** *** ***
    // le tableau ci-dessous n'est pas utilisé, je n'ai pas réussi à boucler
    highlightedSyntaxes: [
      {
        class: "html-keywords",
        regexTest: /&lt;\w+|&lt;\/\w+/,
        regex: /(p|a|body|main|div|span|section|article|img)/g,
      },
      {
        class: "html-attributs",
        regexTest: /\w+/,
        regex: /(id|href|type|src|class)/g,
      },
      {
        class: "html-strings",
        regexTest: /"(.*?)"/,
        regex: /"(.*?)"/,
      },
      {
        class: "html-punctuation",
        regexTest: /[!"#$%&'()*+,\-./:;<>?@[\]^_`{|}~]/g,
        regex: /[!"#$%&'()*+,\-./:;<>?@[\]^_`{|}~]/g,
      },
    ],
  },
};

export function subDivisionFormatting(splittedSubCode) {
  const keywords = /(p|a|body|main|div|span|section|article|img)/g;
  const attributs = /(id|href|type|src|class)/g;
  const htmlString = /"(.*?)"/;
  const punctuation = /[!"#$%&'()*+,\-./:;<>?@[\]^_`{|}~]/g;

  const subSplitFormatted = splittedSubCode.map((subSplit) => {
    if (/&lt;\w+|&lt;\/\w+/.test(subSplit)) {
      subSplit = subSplit.replace(
        keywords,
        `<span class="html-keywords">$&</span>`
      );
    } else if (/"(.*?)"/.test(subSplit)) {
      subSplit = subSplit.replace(
        htmlString,
        `<span class="html-strings">$&</span>`
      );
    } else if (/\w+/.test(subSplit)) {
      subSplit = subSplit.replace(
        attributs,
        `<span class="html-attributs">$&</span>`
      );
    } else {
      subSplit = subSplit.replace(
        punctuation,
        `<span class="html-punctuation">$&</span>`
      );
    }
    return subSplit;
  });
  return subSplitFormatted.join("");
}
