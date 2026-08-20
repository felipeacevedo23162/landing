const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    const errors = [];

    if (!name.value.trim() || name.value.trim().length < 2) {
      errors.push('Nombre invalido.');
    }

    if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      errors.push('Correo electronico invalido.');
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      errors.push('El mensaje debe tener al menos 10 caracteres.');
    }

    const oldClientAlert = form.querySelector('.client-alert');
    if (oldClientAlert) {
      oldClientAlert.remove();
    }

    if (errors.length > 0) {
      event.preventDefault();
      const alert = document.createElement('p');
      alert.className = 'alert alert-error client-alert';
      alert.setAttribute('role', 'alert');
      alert.textContent = errors.join(' ');
      form.prepend(alert);
    }
  });
}
