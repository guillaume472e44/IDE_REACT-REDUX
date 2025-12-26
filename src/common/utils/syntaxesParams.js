export const syntaxesParams = {
  codeJS: {
    tokenSplit: /"(.*?)"|[^\s.,!?;:(){}'«»\-–—\d]+|[\s.,!?;:(){}'«»\-–—\d]/g,
    highlightedSyntaxes: [
      { class: "js-string", regex: /"(.*?)"/ },
      { class: "js-keywords", regex: /(const|let|function|if|else|for|while|try|catch)/ },
      { class: "js-punctuation", regex: /[(){}'[\]]/g },
      { class: "return", regex: "return" },
      { class: "js-numbers", regex: /^\d/ },
    ],
  },
  codeCSS: {
    tokenSplit: /[^\s,!?;:(){}"'«»\d]+|[\s,!?;:(){}"'«»\d]/g,
    highlightedSyntaxes: [
      { class: "css-class", regex: /\.([a-zA-Z0-9_-]+)|#([a-zA-Z0-9_-]+)/g },
      { class: "css-punctuation", regex: /[(){}'[\]]/ },
      { class: "css-numbers", regex: /^\d/ },
    ],
  },
  codeHTML: {
    tokenSplit: /<(.*?)>|\w+|\s|[,!?;:(){}"'\-–—[\]<>=/.°+%]/g,
    subTokenSplit:
      /"(.*?)"|&lt;\w+|&lt;\/\w+|\w+|\s|&lt;|&gt;|[,!?;:(){}"'\-–—[\]|=/.]/g,
    highlightedSyntaxes: [
      {
        class: "html-strings",
        regexTest: /"(.*?)"/,
        regex: /"(.*?)"/,
      },
      {
        class: "html-keywords",
        regexTest: /&lt;\w+|&lt;\/\w+/,
        regex: /(p|a|body|main|div|span|section|article|img|h1|h2|h3|h4|h5|h6|label|input|button)/g,
      },
      {
        class: "html-attributs",
        regexTest: /\w+/,
        regex: /(id|href|type|src|class|for|value|min|max|step)/g,
      },
      {
        class: "html-punctuation",
        regexTest: /[!"#$%&'()*+,\-./:;<>?@[\]^_`{|}~]/,
        regex: /[!"#$%&'()*+,\-./:;<>?@[\]^_`{|}~]/,
      },
    ],
  },
};

// const keywords = /(p|a|body|main|div|span|section|article|img)/g;
// const attributs = /(id|href|type|src|class)/g;
// const htmlString = /"(.*?)"/;
// const punctuation = /[!"#$%&'()*+,\-./:;<>?@[\]^_`{|}~]/g;
// if (/&lt;\w+|&lt;\/\w+/.test(subSplit)) {
//   subSplit = subSplit.replace(
//     keywords,
//     `<span class="html-keywords">$&</span>`
//   );
// } else if (/"(.*?)"/.test(subSplit)) {
//   subSplit = subSplit.replace(
//     htmlString,
//     `<span class="html-strings">$&</span>`
//   );
// } else if (/\w+/.test(subSplit)) {
//   subSplit = subSplit.replace(
//     attributs,
//     `<span class="html-attributs">$&</span>`
//   );
// } else {
//   subSplit = subSplit.replace(
//     punctuation,
//     `<span class="html-punctuation">$&</span>`
//   );
// }
