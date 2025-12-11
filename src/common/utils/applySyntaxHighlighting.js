export function applySyntaxHighlighting({ code, lang }) {
  // Échappement HTML des caractères spéciaux (<, >, &)
  const formattedText = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Identifie les strings simples ou doubles (incluant l'échappement)
  // const STRING_REGEX = /("(\\"|[^"])*")|('(\\'|[^'])*')/g;
  // Identifie les commentaires //... ou /*...*/
  // const COMMENT_REGEX = /(\/\/.*)|(\/\*[\s\S]*?\*\/)/g;

  // sépare toutes les entrées dans un tableau
  const TOKEN_REGEX = /[^\s.,!?;:(){}"'«»\-–—]+|[\s.,!?;:(){}"'«»\-–—]/g;
  const codeSplit = formattedText.match(TOKEN_REGEX);

  // Coloration simple (mots clé, nombres et ponctuation)
  const keywords = /(const|let|function|if|else)/;
  const punctuation = /[(){}'"[\]]/;

  const formateCode = codeSplit?.map((input) => {
    if (keywords.test(input)) {
      return `<span class="keyWord">${input}</span>`;
    } else if (punctuation.test(input)) {
      return `<span class="punctuation">${input}</span>`;
    } else if (/\d/.test(input)) {
      return `<span class="numbers">${input}</span>`;
    } else if (input === "return") {
      return `<span class="return">${input}</span>`;
    } else {
      input = `<span class="default">${input}</span>`;
    }
    return input;
  });

  return formateCode ? formateCode.join("") : "";
}
