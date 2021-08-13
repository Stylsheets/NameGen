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
    var obj = words.join(',').split(',');
    for (let i = 0; i < obj.length; i++) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      const button = document.createElement('button');
      li.className = 'transition ease-inout-quart duration-500 transform scale-100 hover:scale-110 group w-full max-w-sm bg-white overflow-hidden flex items-center justify-between rounded-md px-6 py-3';
      li.setAttribute('style', 'box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.04);');
      span.className = 'transition ease-inout-quart text-gray-500 group-hover:text-gray-800';   
  
      span.innerHTML = obj[i];
      li.appendChild(span);
      button.className = 'transition opacity-0 group-hover:opacity-100 text-gray-300 hover:text-gray-800';
      button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>`;
      li.appendChild(button);
      document.getElementById('content').appendChild(li);

        // <li class="transition ease-inout-quart duration-500 transform scale-100 hover:scale-110 group w-full max-w-sm bg-white overflow-hidden flex items-center justify-between rounded-md px-6 py-3" style="box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.04);">
        //     <span class="transition ease-inout-quart text-gray-500 group-hover:text-gray-800">${obj[i]}</span>
        //     <button class="transition opacity-0 group-hover:opacity-100 text-gray-300 hover:text-gray-800">
        //         <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        //         <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
        //         <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        //         </svg>
        //     </button>
        // </li>
    }
    console.log(obj);

 
}

//küçük bir fonksiyon :)
function regenarete(){
  document.getElementById('content').innerHTML = '';
  create5Words();
}
// click on button if enter key is pressed
window.addEventListener('keydown', function(e) {
  if (e.key == "Enter") document.getElementById('create5words').click();
});
