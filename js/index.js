const consonants = "bcdfghjklmnpqrstvwxz";
const vowels = "aeiouy";

function randomLetter() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function randomVowel() {
  return vowels.charAt(Math.floor(Math.random() * 5));
}

function randomConsonant() {
  return consonants.charAt(Math.floor(Math.random() * 10));
}

function randomString(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomLetter();
  }
  return result;
}

function wordCreator(length, startsWith) {
  let isStartingVowel = startsWith != null ? startsWith.match(/[aeiouy]/i) !== null : !!Math.round(Math.random());
  let result = startsWith || (isStartingVowel ? randomVowel() : randomConsonant());
  console.log(length);
  if (startsWith) length -= startsWith.length;
  for (let i = 0; i < length; i++) {
    if (i % 2 == isStartingVowel) result += randomVowel();
    if (i % 2 == !isStartingVowel) result += randomConsonant();
  }
  return result;
}

function create5Words(maxLength, minLength, startsWith) {
  maxLength = parseInt(document.getElementById('maxLen').value) || 10;
  minLength = parseInt(document.getElementById('minLen').value) || 4;
  startsWith = document.getElementById('startsWith').value;
  if (maxLength < minLength) minLength = document.getElementById('minLen').value = maxLength;
  const words = [];
  for (let i = 0; i < 5; i++) {
    length = Math.floor(Math.random() * (maxLength + 1 - minLength)) + minLength;
    words.push(wordCreator(length, startsWith));
  }
  document.getElementById('content').innerHTML += words.join();
}

//küçük bir fonksiyon :)
function regenarete(){
  create5Words();
  document.getElementById('content').innerHTML = '';
}
// click on button if enter key is pressed
window.addEventListener('keydown', function(e) {
  if (e.key == "Enter") document.getElementById('create5words').click();
});
