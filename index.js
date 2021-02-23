// COMPARSA MENU A TENDINA LINGUE
let engl = document.querySelector('#english');
let languageMenu = document.querySelector('#languageMenu');

engl.addEventListener('click', showMenuLanguage);

function showMenuLanguage() {
  // far chiudere tutti gli altri menu
  aboutM.style.display = 'none';
  partenerM.style.display = 'none';
  resourceseM.style.display = 'none';
  softwareMenu.style.display = 'none';
  if (languageMenu.style.display == 'none') {
    languageMenu.style.display = 'block';
  } else {
    languageMenu.style.display = 'none';
  }
}

// uscita se si esce dal menu con il mouse
languageMenu.addEventListener('mouseleave', exitLanguages);

function exitLanguages() {
  languageMenu.style.display = 'none';
}

// COMPARSA MENU A TENDINA SOFTWARE
let soft = document.querySelector('#software');
let softwareMenu = document.querySelector('#softwareMenu');

soft.addEventListener('click', showMenusoftware);

function showMenusoftware() {
  // far chiudere tutti gli altri menu
  aboutM.style.display = 'none';
  partenerM.style.display = 'none';
  resourceseM.style.display = 'none';
  languageMenu.style.display = 'none';
  if (softwareMenu.style.display == 'none') {
    softwareMenu.style.display = 'block';
  } else {
    softwareMenu.style.display = 'none';
  }
}

// COMPARSA MENU A TENDINA RESOURCES
let resources = document.querySelector('#resources');
let resourceseM = document.querySelector('#resourceseMenu');

resources.addEventListener('click', showMenuResource);

function showMenuResource() {
  // far chiudere tutti gli altri menu
  aboutM.style.display = 'none';
  partenerM.style.display = 'none';
  softwareMenu.style.display = 'none';
  languageMenu.style.display = 'none';
  if (resourceseM.style.display == 'none') {
    resourceseM.style.display = 'block';
  } else {
    resourceseM.style.display = 'none';
  }
}

// COMPARSA MENU A TENDINA PARTENERS

let patener = document.querySelector('#partener');
let partnerM = document.querySelector('#partenerM');

partener.addEventListener('click', showMenuPartener);

function showMenuPartener() {
  // far chiudere tutti gli altri menu
  aboutM.style.display = 'none';
  resourceseM.style.display = 'none';
  softwareMenu.style.display = 'none';
  languageMenu.style.display = 'none';
  if (partenerM.style.display == 'none') {
    partenerM.style.display = 'block';
  } else {
    partenerM.style.display = 'none';
  }
}
// COMPARSA MENU A TENDINA ABOUT CON ARROW FUNCTION

let about = document.querySelector('#about');
let aboutM = document.querySelector('#aboutM');

about.addEventListener('click', () => {
  // far chiudere tutti gli altri menu
  partenerM.style.display = 'none';
  resourceseM.style.display = 'none';
  softwareMenu.style.display = 'none';
  languageMenu.style.display = 'none';
  if (aboutM.style.display == 'none') {
    aboutM.style.display = 'block';
  } else {
    aboutM.style.display = 'none';
  }
});

// COMPARSA E SCOMPARSA CHAT

let chatIcon = document.querySelector('#chat');
let chat = document.querySelector('#window');

chatIcon.addEventListener('click', () => {
  if (chat.style.display == 'none') {
    chat.style.display = 'block';
  } else {
    chat.style.display = 'none';
  }
});

// FAR SCRIVERE ALL'UTENTE DENTRO LA CHAT

let sentedMessage = document.querySelector('#sentedMessage');
let inputMessage = document.querySelector('#inputMessage');

console.log(inputMessage.value);

inputMessage.addEventListener('keypress', () => {
  if (
    event.keyCode == 13 &&
    sentedMessage.innerText ==
      `Per dubbi e perplessità puoi chattare con l'operatore!`
  ) {
    sentedMessage.innerText = ``;
    var para = document.createElement('p');
    para.innerText = inputMessage.value;
    sentedMessage.appendChild(para);
    para.classList.add('styleMessage');
    inputMessage.value = '';
  } else if (
    event.keyCode == 13 &&
    sentedMessage.innerText !=
      `Per dubbi e perplessità puoi chattare con l'operatore!`
  ) {
    var para = document.createElement('p');
    para.innerText = inputMessage.value;
    sentedMessage.appendChild(para);
    para.classList.add('styleMessage');
    inputMessage.value = '';
  } else {
  }
});
