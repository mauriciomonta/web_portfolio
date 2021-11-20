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

document.getElementById('submit').addEventListener('click', (event) => {
  let canSubmit = Boolean;

  function checkMail() {
    if (
      mailInput.value === mailInput.value.toLowerCase()
    ) {
      canSubmit = true;
    } else {
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
});

/* CONTACT FORM VALIDATION */

/* .LOCALSTORAGE */

const formName = document.getElementById('name');
const formSurname = document.getElementById('surname');
const formEmail = document.getElementById('email');
const formMessage = document.getElementById('message-area');

const saveObjData = () => {
  const formValues = {
    name: formName.value,
    surname: formSurname.value,
    email: formEmail.value,
    message: formMessage.value,
  };
  localStorage.setItem('data', JSON.stringify(formValues));
};

formName.addEventListener('keyup', saveObjData);
formSurname.addEventListener('keyup', saveObjData);
formEmail.addEventListener('keyup', saveObjData);
formMessage.addEventListener('keyup', saveObjData);

function recoverData() {
  const data = JSON.parse(localStorage.getItem('data'));
  if (data.name.length !== 0) {
    formName.value = data.name;
  } if (data.surname.length !== 0) {
    formSurname.value = data.surname;
  } if (data.email.length !== 0) {
    formEmail.value = data.email;
  } if (data.message.length !== 0) {
    formMessage.value = data.message;
  }
}

window.addEventListener('load', () => {
  if ('data' in localStorage) {
    recoverData();
  }
});

/* .LOCALSTORAGE */