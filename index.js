// mettere in variabile una node list dei menu in
// modo da chiuderli tutti quando si fa per aprirne un
// altro avendo lasciato il precedente aperto

var menu = document.querySelectorAll('.menu');

// COMPARSA MENU A TENDINA LINGUE SCOMPARSA SITO
let engl = document.querySelector('#english');
let language = document.querySelector('#language');
let siteContent = document.querySelector('#site-content');

engl.addEventListener('click', showMenuLanguage);

function showMenuLanguage() {
  // far chiudere tutti gli altri menu
  var i;
  for (i = 0; i < menu.length; i++) {
    menu[i].style.display = 'none';
  }
  // far apparire scelta lingua e sparire sito
  language.style.display = 'block';
  siteContent.setAttribute('id', 'siteContentAnimation');
  language.setAttribute('id', 'languageMenu');
  // disabilitare scroll
  window.addEventListener('scroll', noScroll);
}
function noScroll() {
  window.scrollTo(0, 0);
}

// SCOMPARSA MENU A TENDINA LINGUE RICOMPARSA SITO

var lang = document.getElementsByClassName('language');

var i;

for (i = 0; i < lang.length; i++) {
  lang[i].addEventListener('click', showSiteContent);
}

function showSiteContent() {
  // riabilitare scroll
  window.removeEventListener('scroll', noScroll);
  siteContent.setAttribute('id', 'siteContentAnimationGoBack');
  language.setAttribute('id', 'languageMenuGoAway');
}

// COMPARSA MENU A TENDINA SOFTWARE
let soft = document.querySelector('#software');
let softwareMenu = document.querySelector('#softwareMenu');

soft.addEventListener('click', showMenusoftware);

function showMenusoftware() {
  // far chiudere tutti gli altri menu
  var i;
  for (i = 0; i < menu.length; i++) {
    menu[i].style.display = 'none';
  }
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
  var i;
  for (i = 0; i < menu.length; i++) {
    menu[i].style.display = 'none';
  }
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
  var i;
  for (i = 0; i < menu.length; i++) {
    menu[i].style.display = 'none';
  }
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
  var i;
  for (i = 0; i < menu.length; i++) {
    menu[i].style.display = 'none';
  }
  if (aboutM.style.display == 'none') {
    aboutM.style.display = 'block';
  } else {
    aboutM.style.display = 'none';
  }
});

// COMPARSA E SCOMPARSA CHAT

let chatIcon = document.querySelector('#chat');
let chat = document.querySelector('#window');

chat.style.display = 'none';

chatIcon.addEventListener('click', () => {
  if (chat.style.display == 'none') {
    console.log('appare');
    chat.style.display = 'block';
    var intUp = setInterval(setPosUp, 1);
    var position = -100;
    function setPosUp() {
      if (position < 0) {
        position = position + 2;
        chat.style.bottom = position + '%';
      } else {
        clearInterval(intUp);
      }
    }
  } else {
    console.log('scompare');
    var int = setInterval(setPosDown, 1);
    var position = 0;
    function setPosDown() {
      if (position > -100) {
        position = position - 2;
        chat.style.bottom = position + '%';
      } else {
        clearInterval(int);
        disNo();
      }
      function disNo() {
        chat.style.display = 'none';
      }
    }
  }
});

// FAR SCRIVERE ALL'UTENTE DENTRO LA CHAT

let sendedMessage = document.querySelector('#sendedMessage');
let inputMessage = document.querySelector('#inputMessage');
let btnSend = document.querySelector('#btnSend');

inputMessage.addEventListener('keypress', sentMessageInvio);
btnSend.addEventListener('click', sentMessage);

function sentMessageInvio() {
  if (event.keyCode == 13) {
    sentMessage();
  }
}

function sentMessage() {
  if (
    sendedMessage.innerText ==
    `Per dubbi e perplessità puoi chattare con l'operatore!`
  ) {
    sendedMessage.innerText = ``;
  }
  var para = document.createElement('p');
  sendedMessage.appendChild(para);
  if (inputMessage.value != '') {
    para.innerText = inputMessage.value;
    para.classList.add('styleMessage');
    inputMessage.value = '';
    if (document.querySelector('#alt') != null) {
      document.querySelector('#alt').remove();
    }
  } else if (document.querySelector('#alt') != null) {
    document.querySelector('#alt').remove();
    para.innerText = 'Scrivi un messaggio prima di premere invio';
    para.classList.add('alt');
    para.setAttribute('id', 'alt');
  } else {
    para.innerText = 'Scrivi un messaggio prima di premere invio';
    para.classList.add('alt');
    para.setAttribute('id', 'alt');
  }
}
