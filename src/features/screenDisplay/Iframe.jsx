import { useSelector } from "react-redux";

export default function Iframe() {
  const content = useSelector((state) => state.iframeSlice);

  const srcDoc = `<!DOCTYPE html>
<html lang="fr">
  <head>
   ${content.iframeHead}
    <style>${content.iframeStyleReset}${content.iframeStyle}</style>
  </head>
  <body>
    ${content.iframeBody}
    <script>${content.iframeScript}</script>
  </body>
</html>
`;

  return <iframe srcDoc={srcDoc} sandbox="allow-scripts"></iframe>;
}
