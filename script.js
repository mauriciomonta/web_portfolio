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

/* CONTACT FORM VALIDATION */

const mailInput = document.getElementById('email');

document.getElementById('submit').addEventListener('click', ()=>{
  let canSubmit = Boolean;
  
  function checkMail() {
    if (
      mailInput.value === mailInput.value.toUpperCase() 
      || mailInput.value.length < 15 
      || !mailInput.value.includes('@')
    ) {
      const input = document.getElementById('correo');
      const error = document.createElement('p');
      error.textContent = 'The email address should be real and  in lowercase.';
      input.appendChild(error);
      document.getElementById('email').classList.add('error-input');
      setTimeout(() => {
        input.removeChild(error);
        document.getElementById('email').classList.remove('error-input');
      }, 5000);
      canSubmit = false;
    } else {
      canSubmit = true;
    }
    return canSubmit;
  }
  
  function validate() {
    checkMail();
  
    if (canSubmit === false) {
      event.preventDefault();
    }
  }

  validate();
  
})

/* CONTACT FORM VALIDATION */
