const consonants = "bcdfghjklmnpqrstvwxz";
const vowels = "aeiouy";

function data() {
  return {
    tab: 'tab1',
    copyalert: false,
  };
}

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

  for (let i = 0; i < words.length; i++) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    li.className = 'transition ease-inout-quart duration-500 transform scale-100 hover:scale-110 group w-full max-w-sm bg-white overflow-hidden flex items-center justify-between rounded-md px-6 py-3';
    li.setAttribute('style', 'box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.04);');
    span.className = 'transition ease-inout-quart text-gray-500 group-hover:text-gray-800';

    span.innerHTML = words[i];
    li.appendChild(span);
    button.className = 'transition opacity-0 group-hover:opacity-100 text-gray-300 hover:text-gray-800';
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>`;
    button.addEventListener('click', copyName);
    li.appendChild(button);
    document.getElementById('content').appendChild(li);
  }
}

function regenerate() {
  document.getElementById('content').innerHTML = '';
  create5Words();
}

function copyName(e) {
  // get LI
  const li = e.currentTarget.parentNode;
  // get span
  const span = li.getElementsByTagName('span')[0];
  // get text
  const text = span.innerHTML;

  var cp = document.createElement("input");
  cp.setAttribute("value", text);
  document.body.appendChild(cp);
  cp.select();
  document.execCommand("copy");
  document.body.removeChild(cp);

  // alert
  document.getElementById('name').innerHTML = text;
  document.body.__x.$data.copyalert = false;
  document.getElementById("progress").classList.remove('progress');
  void document.getElementById("progress").offsetWidth;
  document.getElementById("progress").classList.add('progress');
  document.body.__x.$data.copyalert = true;
  
  const eventID = Math.random().toString(36).substring(7);
  document.body.setAttribute('data-event-id', eventID);
  setTimeout(() => {
    if (document.body.getAttribute('data-event-id') === eventID) {
      document.body.removeAttribute('data-event-id');
      document.body.__x.$data.copyalert = false
    };
  }, 2000);
}

// click on button if enter key is pressed
window.addEventListener('keydown', function (e) {
  if (e.key == "Enter") document.getElementById('create5words').click();
});

// if browser is firefox
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  document.getElementById('back').classList.add('backdrop-firefox');
  document.getElementById('back').classList.remove('backdrop');
}
