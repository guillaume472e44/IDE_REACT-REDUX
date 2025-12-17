import { syntaxesParams, subDivisionFormatting } from "./syntaxesParams";

export function applySyntaxHighlighting({ code, lang }) {
  let stylisedCode;

  if (lang !== "codeHTML") {
    const formattedText = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const codeSplit = formattedText.match(syntaxesParams[lang].tokenSplit);

    stylisedCode = codeSplit?.map((input) => {
      for (const syntax of syntaxesParams[lang].highlightedSyntaxes) {
        input = input.replace(
          syntax.regex,
          (match) => `<span class=${syntax.class}>${match}</span>`
        );
      }
      return input;
    });
  } else {
    const codeSplit = code.match(syntaxesParams.codeHTML.tokenSplit);

    stylisedCode = codeSplit?.map((split) => {
      split = split
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      // commentaires HTML (pas de coloration)
      if (/&lt;!--(.*?)--&gt;/.test(split)) {
        return split;
      }
      // contenu entre chevrons (division en sous-chaîne)
      else if (/&lt;(.*?)&gt;/.test(split)) {
        return subDivisionFormatting(
          split.match(syntaxesParams.codeHTML.subTokenSplit)
        );
      }
      // texte en dehors des chevrons et les sauts de ligne
      else
        return /\s/g.test(split)
          ? split
          : `<span class="html-default">${split}</span>`;
    });
  }

  return stylisedCode ? stylisedCode.join("") : "";
}
