document.getElementById('hamBtn').addEventListener('click', () => {
  document.getElementById('links').classList.add('link-show');
});

document.getElementById('hamBtnClose').addEventListener('click', () => {
  document.getElementById('links').classList.remove('link-show');
});

document.getElementById('mobile-menu').addEventListener('click', () => {
  document.getElementById('links').classList.remove('link-show');
});

document.getElementById('project-1').addEventListener('click', () => {
  document.getElementById('modal-popup').classList.add('popup-visible');
  setTimeout(() => {
    document.getElementById('modal-popup').classList.add('popup-transparency');
  }, 300);
});

document.getElementById('project-2').addEventListener('click', () => {
  document.getElementById('modal-popup').classList.add('popup-visible');
  setTimeout(() => {
    document.getElementById('modal-popup').classList.add('popup-transparency');
  }, 300);
});

document.getElementById('project-3').addEventListener('click', () => {
  document.getElementById('modal-popup').classList.add('popup-visible');
  setTimeout(() => {
    document.getElementById('modal-popup').classList.add('popup-transparency');
  }, 300);
});

document.getElementById('project-4').addEventListener('click', () => {
  document.getElementById('modal-popup').classList.add('popup-visible');
  setTimeout(() => {
    document.getElementById('modal-popup').classList.add('popup-transparency');
  }, 300);
});

document.getElementById('project-5').addEventListener('click', () => {
  document.getElementById('modal-popup').classList.add('popup-visible');
  setTimeout(() => {
    document.getElementById('modal-popup').classList.add('popup-transparency');
  }, 300);
});

document.getElementById('project-6').addEventListener('click', () => {
  document.getElementById('modal-popup').classList.add('popup-visible');
  setTimeout(() => {
    document.getElementById('modal-popup').classList.add('popup-transparency');
  }, 300);
});

document.getElementById('close-popup').addEventListener('click', () => {
  document.getElementById('modal-popup').classList.remove('popup-transparency');
  setTimeout(() => {
    document.getElementById('modal-popup').classList.remove('popup-visible');
  }, 300);
});
