// COMPARSA MENU A TENDINA LINGUE
engl = document.querySelector('#english');
languageMenu = document.querySelector('#languageMenu');

engl.addEventListener('click', showMenuLanguage);

function showMenuLanguage() {
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
soft = document.querySelector('#software');
softwareMenu = document.querySelector('#softwareMenu');

soft.addEventListener('click', showMenusoftware);

function showMenusoftware() {
  if (softwareMenu.style.display == 'none') {
    softwareMenu.style.display = 'block';
  } else {
    softwareMenu.style.display = 'none';
  }
}

// COMPARSA MENU A TENDINA RESOURCES
resources = document.querySelector('#resources');
resourceseM = document.querySelector('#resourceseMenu');

resources.addEventListener('click', showMenuResource);

function showMenuResource() {
  if (resourceseM.style.display == 'none') {
    resourceseM.style.display = 'block';
  } else {
    resourceseM.style.display = 'none';
  }
}

// COMPARSA MENU A TENDINA PARTENERS

patener = document.querySelector('#partener');
partnerM = document.querySelector('#partenerM');

partener.addEventListener('click', showMenuPartener);

function showMenuPartener() {
  if (partenerM.style.display == 'none') {
    partenerM.style.display = 'block';
  } else {
    partenerM.style.display = 'none';
  }
}
// COMPARSA MENU A TENDINA ABOUT CON ARROW FUNCTION

about = document.querySelector('#about');
aboutM = document.querySelector('#aboutM');

about.addEventListener('click', () => {
  if (aboutM.style.display == 'none') {
    aboutM.style.display = 'block';
  } else {
    aboutM.style.display = 'none';
  }
});
