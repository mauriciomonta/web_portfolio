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
/* const existData = Boolean; */
/* let data = {};
document.getElementById('form').addEventListener('keyup', () => {
  const nameval = document.getElementById('name').value;
  const surnameval = document.getElementById('surname').value;
  const emailval = document.getElementById('email').value;
  const messageval = document.getElementById('message-area').value;
  data = {
    name: nameval, surname: surnameval, email: emailval, message: messageval,
  };
  const storeData = JSON.stringify(data);
  localStorage.setItem('data', storeData);
  console.log(storeData);
  /*   existData = true;
  console.log(existData); */

/*  if (nameval.length === 0
    && surnameval.length === 0
    && emailval.length === 0
    && messageval.length === 0
  ) {
    localStorage.removeItem('data');
    console.log('fields empty');
  } else {
    console.log('fields has content');
  }
  return storeData;
})
window.onload = function recover() {
  if ('data' in localStorage) {
    const pito = localStorage.getItem('data');
    JSON.parse(pito);
    console.log(pito, '-- has data');
    nameval = pito.name;
  }
};

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

/* .LOCALSTORAGE */