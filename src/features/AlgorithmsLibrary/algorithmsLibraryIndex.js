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

.statement { font-style: italic; margin-block-end: 16px; }

#search { 
 width : 4rem;
 margin-block-start: 8px;
 margin-block-end: 24px;
}
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
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Roman numeral converter</h1>
 <label for="converter">Decimal number :</label>
 <input type="number" id="converter" value="16" min="1" />
 <p>Roman numeral : <span id="result">XVI</span></p>
</main>
`,
    codeCSS: `/* CSS File */

.title { text-align: start; margin-block-end: 32px; }

#converter { 
 width: 4rem;
 margin-block-end: 16px;
 text-align: center;
}
#result {
 margin-inline-start: 0.5rem;
 font-weight: 700;
}
`,
    codeJS: `// JavaScript File

function romanConverter(num) {
 const decimalBase = [
  1000,900,500,400,100,90,50,40,10,9,5,4,1
 ];
 const romanNumbers = [
 "M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I",
 ];

 let result = "";

 for (let i = 0; i < decimalBase.length; i++) {
  while (num >= decimalBase[i]) {
   result += romanNumbers[i];
   num -= decimalBase[i];
  }
 }
 return result;
}

const nbrToConvert = document.getElementById("converter");
const result = document.getElementById("result");

nbrToConvert.addEventListener("change", (e) => {
  result.textContent = romanConverter(e.target.value);
});
`,
  },
  {
    name: "isPrime",
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Is this number prime?</h1>
 <p class="statement">
  Prime numbers are numbers that can only be divided by 1 and themselves.
 </p>
 <p class="statement">
 (1 is not a prime number.)
 </p>
 <input type="number" id="NbrToTest" value="0" />
 <label for="NbrToTest">is
  <span id="result">not prime !</span>
 </label>
</main>
`,
    codeCSS: `/* CSS File */

.title { text-align: start; }

.statement { font-style: italic; }

#NbrToTest { 
 width: 4rem;
 margin-block: 24px;
 text-align: center;
}
`,
    codeJS: `// JavaScript File

function isPrime(nbr) {
  if (nbr < 2) return false;
  for (let i = 2; i < nbr; i++) {
    if (nbr % i === 0) return false;
  }
  return true;
}

const nbrToTest = document.getElementById("NbrToTest");
const result = document.getElementById("result");

nbrToTest.addEventListener("change", (e) => {
 isPrime(e.target.value)
  ? result.textContent = " prime !"
  : result.textContent = " not prime !";
});
`,
  },
  {
    name: "toFahrenheit",
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Celsius to Fahrenheit converter</h1>
 <p class="statement">
  Formula : (0 °C x 9/5) + 32 = 32 °F
 </p>
 <div class="container">
  <div class="input-container">
   <input type="number" id="Celsius" />
   <label for="Celsius">degrees Celsius (°C)</label>
  </div>
  <p> = </p>
  <div class="input-container">
   <input type="number" id="Fahrenheit" />
   <label for="Fahrenheit">degrees Fahrenheit (°F)</label>
  </div> 
 </div>
</main>
`,
    codeCSS: `/* CSS File */

.title { text-align: start; }
.statement { font-style: italic; margin-block-end: 64px; }

.container { 
 display: flex;
 gap: 16px;
 justify-content: center;
}

.input-container { 
 display: flex;
 flex-direction: column;
 align-items: center;
}
`,
    codeJS: `// JavaScript File

function celciusToFahrenheit(deg) {
 return Math.trunc(deg * (9 / 5) + 32);
}
function fahrenheitToCelcius(deg) {
 return Math.trunc((deg - 32) * 5 / 9);
}
const inputCel = document.getElementById("Celsius");
const inputFahr = document.getElementById("Fahrenheit");

inputCel.addEventListener("change", (e) => {
 inputFahr.value = celciusToFahrenheit(e.target.value);
});
inputFahr.addEventListener("change", (e) => {
 inputCel.value = fahrenheitToCelcius(e.target.value);
});
`,
  },
  {
    name: "vowelsCounter",
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Vowels counter</h1>
 <p class="statement">returns the number of vowels contained in a string of characters.</p>
 <label for="string-input">Your sentence :</label>
 <input type="text" id="string-input" />
 <p>Result : <span id="result"></span></p>
</main>
`,
    codeCSS: `/* CSS File */

.title { text-align: start; }

.statement { font-style: italic; margin-block-end: 32px; }

#string-input { 
 width: 100%;
 border: none;
 padding: 2px;
 margin-block-start: 4px;
 margin-block-end: 12px;
}
`,
    codeJS: `// JavaScript File

function getVowelsCount(string) {
 return string.match(/a|e|i|o|u|y/gi) 
  ? string.match(/a|e|i|o|u|y/gi).length 
  : 0;
}

const userInput = document.getElementById("string-input");
const result = document.getElementById("result");

userInput.addEventListener("input", (e) => {
 result.textContent = getVowelsCount(e.target.value);
});

const example = "The work is mysterious and important"
userInput.placeholder = "ex: " + example;
result.textContent = getVowelsCount(example);
`,
  },
  {
    name: "factorial",
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Factorial</h1>
 <p class="statement">
  The factorial of a natural number n is the product of all strictly positive integers less than or equal to n.
 </p>
 <p class="statement">The factorial of 0 and 1 is equal to 1.</p>
 <label for="base-number">Number =</label>
 <input type="number" id="base-number" />
 <p>Number! = <span id="result"></span></p>
</main>
`,
    codeCSS: `/* CSS File */

.title {
 text-align: start;
}
.statement {
 font-style: italic;
}
#base-number {
 width: 4rem;
 margin-block-start: 24px;
 margin-block-end: 12px;
 margin-inline-start: 4px;
}
`,
    codeJS: `// JavaScript File

function factorial(num) {
 if (num < 0) return "invalid input"
 if (num === 0 || num === 1) return 1;
 let numFactor = 1;
 for (i = 1; i < num; i++) {
  numFactor *= i + 1;
 }
 return numFactor;
}

const userInput = document.getElementById("base-number");
const result = document.getElementById("result");

userInput.addEventListener("change", (e) => {
  result.textContent = factorial(e.target.value);
});
`,
  },
  {
    name: "capitalize",
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Capitalize first letter</h1>
 <label for="string-input">Your sentence :</label>
 <input type="text" id="string-input" />
 <p>Result : <span id="result"></span></p>
</main>
`,
    codeCSS: `/* CSS File */

.title {
 text-align: start;
 margin-block-end: 24px;
}
#string-input {
 width: 100%;
 padding: 2px;
 margin-block-start: 4px;
 margin-block-end: 24px;
 border: none;
}
#result {
 display: block;
 font-weight: 600; 
}
`,
    codeJS: `// JavaScript File

function capitalize(str) {
 const splitStr = str.split(" ");
 return splitStr.map((word) => word.replace(
  word[0], word[0]?.toUpperCase())).join(" ");
}

const userInput = document.getElementById("string-input");
const result = document.getElementById("result");

userInput.addEventListener("input", (e) => {
 result.textContent = capitalize(e.target.value);
});

const example = 
 "the future is uncertain and the end is always near"
userInput.placeholder = "ex: " + example;
result.textContent = capitalize(example);
`,
  },
  {
    name: "abbreviation",
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Name abbreviation</h1>
 <label for="string-input">first and last name :</label>
 <input type="text" id="string-input" />
 <p>Result : <span id="result"></span></p>
</main>
`,
    codeCSS: `/* CSS File */

.title {
 text-align: start;
 margin-block-end: 24px;
}
#string-input {
 padding: 2px;
 margin-block-start: 4px;
 margin-block-end: 24px;
 border: none;
}
#result {
 font-weight: 600; 
}
`,
    codeJS: `// JavaScript File

function abbreviation(str) {
 const splitStr = str.split(" ");
 if(!splitStr[1]) return;
 return (splitStr[0] + " " + splitStr[1][0] + ".");
}

const userInput = document.getElementById("string-input");
const result = document.getElementById("result");

userInput.addEventListener("input", (e) => {
 result.textContent = abbreviation(e.target.value);
});

const example = "Stephen King"
userInput.placeholder = "ex: " + example;
result.textContent = abbreviation(example);
`,
  },
  {
    name: "isJSON",
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Valid JSON?</h1>
 <label for="string-input">expression :</label>
 <input type="text" id="string-input" />
 <p>Result : <span id="result"></span></p>
</main>
`,
    codeCSS: `/* CSS File */

.title {
 text-align: start;
 margin-block-end: 24px;
}
#string-input {
 width: 24rem;
 padding: 2px;
 margin-block-start: 4px;
 margin-block-end: 24px;
 border: none;
}
#result {
 font-weight: 600; 
}
`,
    codeJS: `// JavaScript File

function isJSON(obj) {
 try {
  JSON.parse(obj);
   return "true";
 } catch {
   return "false";
 }
}

const userInput = document.getElementById("string-input");
const result = document.getElementById("result");

userInput.addEventListener("input", (e) => {
 result.textContent = isJSON(e.target.value);
});

const example = '{ "name":"Adam", age:"20" }'
userInput.placeholder = "ex: " + example;
result.textContent = isJSON(example);
`,
  },
  {
    name: "getTime",
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Talking clock</h1>
 <p class="statement">... voiceless</p>
 <span id="result"></span>
</main>
`,
    codeCSS: `/* CSS File */

body { background: #363636ff; color: whitesmoke }

.title { text-align: start; }

.statement { font-style: italic; margin-block-end: 32px; }

#result {
 display: flex;
 justify-content: center;
 font-size: 6rem;
 font-weight: bold;
 color: turquoise;
}
`,
    codeJS: `// JavaScript File

const result = document.getElementById("result");
result.textContent = new Date().toTimeString().slice(0, 8);

function updateTime(){
 result.textContent = new Date().toTimeString().slice(0, 8);
}

let intervalID;
intervalID ??= setInterval(updateTime, 1000);
`,
  },
  {
    name: "taxman",
    codeHTML: `<!-- HTML File -->

<main>
 <h1 class="title">Yeah I'm the taxman</h1>
 <p class="statement">
  There's one for you, nineteen for me
 </p>
 <div class="container">
  <div class="input-container">
   <input type="number" id="price" step="0.1" />
   <label for="price">price excluding tax</label>
  </div>
  <p>+</p>
  <div class="input-container">
   <input type="number" id="tax" step="0.1" />
   <label for="tax">tax rate (%)</label>
  </div>
  <p>=</p>
  <div class="input-container">
   <input type="number" id="result" step="0.1" />
   <label for="result">Brouzoufs</label>
  </div>
 </div>
</main>
`,
    codeCSS: `/* CSS File */

.title { text-align: start; }
.statement { font-style: italic; margin-block-end: 32px; }

.container { 
 display: flex;
 justify-content: space-evenly;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {text-align: center}
`,
    codeJS: `// JavaScript File

const exTaxPrice = document.getElementById("price");
const taxRate = document.getElementById("tax");
const finalPrice = document.getElementById("result");

function getFinalPrice() {
 const exTax = Number(exTaxPrice.value);
 const tax = taxRate.value / 100;
 finalPrice.value = (exTax + exTax * tax).toFixed(2);
}
function getExTaxPrice() {
 const finalP = Number(finalPrice.value);
 const tax = taxRate.value / 100;
 exTaxPrice.value = (finalP / (1 + tax)).toFixed(2);
}

exTaxPrice.addEventListener("change", getFinalPrice);
taxRate.addEventListener("change", getFinalPrice);
finalPrice.addEventListener("change", getExTaxPrice)
`,
  },
  {
    name: "animatedInput",
    codeHTML: `<!-- HTML File -->

<main>
 <div class="input-container">
  <input type="password" id="text-input" required />
  <label for="text-input" class="text-label">
   <span style="transition-delay:0ms">P</span>
   <span style="transition-delay:50ms">a</span>
   <span style="transition-delay:100ms">s</span>
   <span style="transition-delay:150ms">s</span>
   <span style="transition-delay:200ms">w</span>
   <span style="transition-delay:250ms">o</span>
   <span style="transition-delay:300ms">r</span>
   <span style="transition-delay:350ms">d</span>
  </label>
 </div>
</main>
`,
    codeCSS: `/* CSS File */

.input-container {
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 128px;
 position: relative;
}

#text-input {
 background: whitesmoke;
 border: none;
 border-bottom: 2px solid gray;
 padding: 8px 4px;
 font-size: 1rem;
 &:focus {
  outline: none;
 }
}

.text-label {
 position: absolute;
 pointer-events: none;
 span {
  display: inline-block;
  letter-spacing: -2px;
  transition: transform 0.4s
   cubic-bezier(1, -2, 1, 2);
 }
}

#text-input:focus+label span,
#text-input:valid+label span {
 transform: translate(-48px, -32px);
}
`,
    codeJS: `// JavaScript File`,
  },
  {
    name: "bouncing_ball",
    codeHTML: `<!-- HTML File -->

<main>
 <div class="wrapper">
  <div class="ball"></div>
  <div class="shadow"></div>
 </div>
</main>
`,
    codeCSS: `/* CSS File */

body {background: #323232ff;}
.wrapper {
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 16px;
 position: relative;
}

.ball {
 width: 80px;
 height: 80px;
 border-radius: 50%;
 background: #fff;
 position: absolute;
 animation : bounce 0.5s alternate infinite ease;
}

@keyframes bounce {
 0% {
  top: 240px;
  height: 10px;
  border-radius: 50% 50% 25% 25%;
  transform: scaleX(2);
 }
 40% {
  height: 80px;
  border-radius: 50%;
  transform: scaleX(1);
 }
 100% { top: 0% }
}

.shadow {
 width: 80px;
 height: 16px;
 border-radius: 50%;
 background-color: rgba(0,0,0,0.25);
 position: absolute;
 top: 256px;
 z-index: -1;
 filter: blur(4px);
 animation: shadow 0.5s alternate infinite ease;
}

@keyframes shadow {
 0% { transform: scaleX(1.5) }
 40% { transform: scaleX(1); opacity: 0.7 }
 100% { transform: scaleX(0.2); opacity: 0.4 }
}
`,
    codeJS: `// JavaScript File`,
  },
  {
    name: "button",
    codeHTML: `<!-- HTML File -->

<main class="container">
 <button>Click me</button>
</main>
`,
    codeCSS: `/* CSS File */

.container {
 display: flex;
 justify-content: center;
 margin-top: 128px;
}

button {
 padding: 8px 16px;
 font-size: 1rem;
 border: 1px solid white;
 background: whitesmoke;
 border-radius: 8px;
 transition: box-shadow 0.25s ease-in-out;
 box-shadow: -6px 6px 12px silver, 6px -6px 12px white;
 cursor: pointer;
}
button:active {
 border: none;
 box-shadow: inset 4px 4px 12px silver,
  inset 4px 4px 12px white;
}
`,
    codeJS: `// JavaScript File`,
  },
  {
    name: "school_notebook",
    codeHTML: `<!-- HTML File -->

<div class="wrapper"></div>
`,
    codeCSS: `/* CSS File */

.wrapper {
 height: 100vh;
 background: white;
 background-image: linear-gradient(
  90deg,
  transparent 44px,
  lightpink 44px,
  lightpink 46px,
  transparent 44px
 ),
 linear-gradient(lightgray 1px, transparent 1px);
 background-size: 100% 24px;
}
`,
    codeJS: `// JavaScript File`,
  },
  {
    name: "dynamic_color",
    codeHTML: `<!-- HTML File -->

<main>
 <div class="anime-bg"></div>
 <p class="wrapper">
  <span>DYNAMIC</span>
  <span>color</span>
 </p> 
</main>
`,
    codeCSS: `/* CSS File */

.wrapper {
 margin-top: 128px;
 font-size: 4rem;
 font-weight: 900;
 color: yellow;
 mix-blend-mode: difference;
}

span:first-of-type { color: ghostwhite }
span:last-of-type { font-style: italic }

.anime-bg { 
 width: 100%;
 height: 80px;
 background: black;
 position: absolute;
 top: 0;
 left: 0;
 animation: animate 8s alternate infinite linear;
}

@keyframes animate { to { top: calc(100% - 80px) }
`,
    codeJS: `// JavaScript File`,
  },
];
