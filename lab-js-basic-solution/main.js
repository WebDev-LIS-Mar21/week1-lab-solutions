const hacker1 = 'José';

console.log("The driver's name is " + hacker1);
console.log("The driver's name is " + hacker1);
console.log(`The driver's name is ${hacker1}`); // Template literal syntax, Backticks

const hacker2 = 'Jose';

console.log("The navigator's name is " + hacker1);

// Iteration 2

if (hacker1.length > hacker2.length) {
  console.log('The driver has the longest name, it has ' + hacker1.length + ' characters.');
} else if (hacker1.length < hacker2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters.'
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3

// 3.1

let auxiliaryString = '';

for (let i = 0; i < hacker1.length; i++) {
  const letter = hacker1[i];
  // const letter = hacker1.charAt(i);
  auxiliaryString += letter.toUpperCase();
  if (i < hacker1.length - 1) {
    auxiliaryString += ' ';
  }
}

console.log(auxiliaryString);

// 3.2

let auxiliaryReversedString = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  const letter = hacker2[i];
  auxiliaryReversedString += letter;
}

// 3.3

if (hacker1.localeCompare(hacker2, 'en', { sensitivity: 'base' }) > 0) {
  console.log('Yo, the navigator goes first definitely.');
} else if (hacker1.localeCompare(hacker2, 'en', { sensitivity: 'base' }) < 0) {
  console.log("The driver's name goes first.");
} else {
  console.log('What?! You both have the same name?');
}

// Bonus 1

// const lorem = 'abc def ghi.';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque mollis tellus quis tincidunt. Praesent vel efficitur arcu. Etiam ut pharetra nisi, at rutrum erat. Mauris a blandit dolor. Ut sit amet quam nunc. Suspendisse auctor lacus faucibus elit congue pellentesque. Duis commodo, lacus non tempus mattis, justo lacus laoreet urna, a lacinia tortor urna quis elit. Mauris ac hendrerit justo, sit amet tempus massa. Integer maximus ullamcorper justo, maximus auctor tortor. Donec elementum, nisl quis pellentesque tempor, turpis purus dictum enim, ac consectetur lorem tortor in augue. Vivamus eleifend pellentesque nisl, ac molestie libero. In commodo, leo vel rutrum dictum, neque ipsum malesuada lorem, auctor elementum est eros a odio.

Maecenas porttitor tincidunt ante, sed malesuada ante volutpat nec. Nunc sed sapien et urna varius maximus. Fusce in dictum justo. Sed ullamcorper purus sit amet diam porta bibendum. Donec commodo congue blandit. Donec mattis velit a justo tristique dictum. Vestibulum velit dolor, elementum eu magna ut, consectetur vestibulum tellus. Maecenas dapibus risus vel ligula porttitor sodales. Vestibulum vitae ex nec nibh fringilla ultricies id eu ante. Donec ac ultricies dolor. Donec porttitor turpis sit amet felis pharetra, non posuere risus luctus. Praesent sollicitudin felis nulla. Mauris elementum sed lacus vitae tincidunt. In interdum neque urna, a dignissim nisi efficitur in.

Mauris finibus condimentum tellus eget consectetur. Maecenas mi urna, tincidunt vitae facilisis in, mollis vel tellus. Maecenas tempor ligula eu nisi consequat consectetur. Integer porta viverra metus vel rutrum. Nullam sed dui massa. Quisque vehicula purus a dolor feugiat, a dignissim turpis sagittis. Praesent at convallis enim, et posuere augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque eu justo vel felis fermentum commodo. Fusce lacinia velit vitae sapien feugiat semper vel eu mauris. Aliquam bibendum sodales magna, sed laoreet nibh rutrum quis. Quisque quis mi pharetra, ullamcorper eros sodales, vestibulum lectus. Morbi semper maximus est a placerat. Pellentesque blandit felis sit amet aliquam volutpat. Etc Quisque luctus nunc a fermentum luctus. Nulla facilisi.`;

let totalWords = 0;

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === ' ') {
    totalWords++;
  }
}

// if (lorem.length > 0) {
// if (lorem.length) {
if (lorem) {
  totalWords++;
}

console.log(totalWords);

// Bonus 1.3

let etWordCount = 0;

for (let i = 0; i < lorem.length; i++) {
  // Figure out if current character is ' ' and next character is 'e' and following is 't', making sure that the char that follows 't' is not in the alphabet.
  if (
    lorem[i] === ' ' &&
    lorem.toLowerCase()[i + 1] === 'e' &&
    lorem[i + 2] === 't' &&
    lorem[i + 3] <= 'A'
    // !(lorem[i + 3] >= 'A' && lorem[i + 3] <= 'z')
  ) {
    etWordCount++;
  }
}

console.log(etWordCount);

// Detect palindrome

const phrase = 'A man, a plan, a canal, Panama!';

let cleanPhrase = '';

for (let i = 0; i < phrase.length; i++) {
  const letter = phrase[i];
  if (letter >= 'A' && letter <= 'z') {
    cleanPhrase += letter.toLowerCase();
  }
}

let reversedCleanPhrase = '';

/*
for (let i = 0; i < cleanPhrase.length; i++) {
  reversedCleanPhrase += cleanPhrase[cleanPhrase.length - 1 - i];
}
*/

for (let i = cleanPhrase.length - 1; i >= 0; i--) {
  reversedCleanPhrase += cleanPhrase[i];
}

const phraseIsPalindrome = cleanPhrase === reversedCleanPhrase;

console.log(phraseIsPalindrome);
