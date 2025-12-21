export const initialState = {
  iframeHead: `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Custom IDE</title>
`,
  iframeStyleReset: `*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, sans-serif;
  color: #213547;
  background-color: #f1f1f1;
  padding-inline: 8px;
}

h1 {
  text-align: center;
}
`,
  iframeStyle: ``,
  iframeBody: `<h1>Waiting for your code...</h1>`,
  iframeScript: ``,
};
