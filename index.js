function randomLetter() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function randomVowel() {
  return "aeiouy".charAt(Math.floor(Math.random() * 5));
}

function randomConsonant() {
  return "bcdfghjklmnpqrstvwxz".charAt(Math.floor(Math.random() * 10));
}

function randomString(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomLetter();
  }
  return result;
}

function wordCreator(length) {
  // if length is undefined length will be between 4 and 7
    if (length === undefined) {
    length = 3 + Math.floor(Math.random() * 2);
  }
  const seed = !!Math.round(Math.random());
  let result = seed ? randomVowel() : randomConsonant();
  for (let i = 0; i < length; i++) {
    if (i % 2 == seed) result += randomVowel();
    if (i % 2 == !seed) result += randomConsonant();
  }
  return result;
}

function create10Words() {
  const words = [];
  for (let i = 0; i < 10; i++) {
    words.push(wordCreator());
  }
  document.getElementById('content').innerHTML += words.join('<br />');
}
