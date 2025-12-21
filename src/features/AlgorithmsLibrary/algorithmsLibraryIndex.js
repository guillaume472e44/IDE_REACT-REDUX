export const list = [
  {
    name: "binary_search",
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Binary search</h1>
 <p class="statement">Allows you to determine if an element
  is contained in an array with the fewest possible tests.
  (Array must be sorted.)
 </p>
 <p>Array = [ 1, 3, 5, 7, 9 ] </p>
 <label for="search">Number to search :</label>
 <input type="number" id="search" value="9" />
 <p>index found : <span id="result">4</span> </p>
</main>
`,
    codeCSS: `/* CSS File */

.title { text-align: start }
.statement { font-style: italic; margin-block-end: 16px }
#search { width : 3rem; margin-block-end: 24px }
`,
    codeJS: `// JavaScript File

function binary_search(sortedArray, item) {
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let guess = sortedArray[mid];
    if (guess === item) return mid;
    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }
  return "null";
}
const my_list = [ 1, 3, 5, 7, 9 ]
const searchInput = document.getElementById("search")
const result = document.getElementById("result")

searchInput.addEventListener("change", (e) => {
  result.textContent = binary_search(
   my_list, e.target.value * 1);
});
`,
  },
  {
    name: "toRoman",
    codeHTML: `<!-- HTML File -->`,
    codeCSS: `/* CSS File */`,
    codeJS: `// JavaScript File`,
  },
];
