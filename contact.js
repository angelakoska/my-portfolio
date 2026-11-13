/* Practice contact form: validate locally; never send or store entered data. */
'use strict';
const form = document.querySelector('#contact-form');
if (form) {
  const status = document.querySelector('#form-status');
  const fields = [
    { input: document.querySelector('#contact-name'), error: document.querySelector('#name-error'), label: 'your name' },
    { input: document.querySelector('#contact-email'), error: document.querySelector('#email-error'), label: 'your email address' },
    { input: document.querySelector('#contact-message'), error: document.querySelector('#message-error'), label: 'a message' }
  ];
  function validate(field) {
    const value = field.input.value.trim();
    let message = '';
    if (!value) message = `Please enter ${field.label}.`;
    else if (field.input.type === 'email' && field.input.validity.typeMismatch) message = 'Enter an email address in the format name@example.com.';
    else if (value.length > field.input.maxLength) message = `Use no more than ${field.input.maxLength} characters.`;
    field.error.textContent = message;
    field.error.hidden = !message;
    if (message) field.input.setAttribute('aria-invalid', 'true');
    else field.input.removeAttribute('aria-invalid');
    return !message;
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    const invalid = fields.filter(field => !validate(field));
    if (invalid.length) {
      status.textContent = `Please correct ${invalid.length} ${invalid.length === 1 ? 'field' : 'fields'}. Nothing has been sent.`;
      invalid[0].input.focus();
    } else {
      status.textContent = 'Your message passes the checks. This is a practice form; nothing has been sent or stored.';
    }
  });
  fields.forEach(field => field.input.addEventListener('input', () => {
    status.textContent = '';
    if (field.input.hasAttribute('aria-invalid')) validate(field);
  }));
  // Enable only after the submit handler exists, preventing accidental navigation.
  form.noValidate = true;
  document.querySelector('#contact-fields').disabled = false;
}
