const form = document.querySelector('form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const errorMsgSpan = document.querySelector('.error');

email.addEventListener('input', e => {
  if (!email.validity.patternMismatch) {
    // reset error message view
    errorMsgSpan.textContent = '';
    errorMsgSpan.className = 'error';
  } else {
    console.log(email.validationMessage);
    showError();
  }
});

country.addEventListener('input', e => {
  if (!country.validity.patternMismatch) {
    // reset error message view
    errorMsgSpan.textContent = '';
    errorMsgSpan.className = 'error';
  } else {
    console.log(country.validationMessage);
    showError();
  }
});

zip.addEventListener('input', e => {
  if (!zip.validity.patternMismatch) {
    // reset error message view
    errorMsgSpan.textContent = '';
    errorMsgSpan.className = 'error';
  } else {
    console.log(zip.validationMessage);
    showError();
  }
});

password1.addEventListener('input', e => {
  if (!password1.validity.patternMismatch) {
    // reset error message view
    errorMsgSpan.textContent = '';
    errorMsgSpan.className = 'error';
  } else {
    inactiveField();
    console.log(password1.validationMessage);
    showError();
  }
});

password2.addEventListener('input', e => {
  matchFields(password1, password2);
});

function matchFields(pass1, pass2) {
  pass1 = password1.value;
  pass2 = password2.value;
  if (pass1 && pass2 !== pass1) {
    errorToggle();
    errorMsgSpan.textContent = 'Passwords must match.';
    return false;
  } else if (!pass1) {
    inactiveField();
  } else {
    errorToggle();
    errorMsgSpan.textContent = 'Passwords must match.';
  }
}

function inactiveField() {
  if (password1.value.length < 1) {
    password2.classList.add('inactive');
  } else {
    password2.classList.remove('inactive');
  }
}

// Validate form function here

function clearFields() {
  uname.value = '';
  email.value = '';
  phone.value = '';
  comment.value = '';
}

function errorToggle() {
  errorMsgSpan.classList.add('active');
}

function showError() {
  if (email.validity.patternMismatch) {
    errorToggle();
    errorMsgSpan.textContent =
      'All email addresses must consist of one or more letters (lower or upper case) or numbers, followed by the @ symbol, one or more letters, a period and a suffix address.  Example: BigRed25@bigcorp.eu';
  } else if (country.validity.patternMismatch) {
    errorToggle();
    errorMsgSpan.textContent =
      'Please enter a country name and use proper casing without hyphens or additional symbols. Example: United States';
  } else if (zip.validity.patternMismatch) {
    errorToggle();
    errorMsgSpan.textContent =
      'Please enter a valid U.S. postal code. If adding the additional 4 digits for delivery route, please add a hyphen before the number. Example: 92101-0458';
  } else if (password1.validity.patternMismatch) {
    errorToggle();
    errorMsgSpan.textContent =
      'Please enter a valid password between 4 and 30 characters in length including any of these symbols: !@#$%^&*';
  }
}
