const ContactMessage = require('../models/ContactMessage');
const { getLandingViewModel } = require('./landingData');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildViewModel(extra = {}) {
  return {
    ...getLandingViewModel(),
    ...extra
  };
}

async function submitContact(req, res, next) {
  try {
    const name = (req.body.name || '').trim();
    const email = (req.body.email || '').trim().toLowerCase();
    const message = (req.body.message || '').trim();

    const errors = [];

    if (!name || name.length < 2) {
      errors.push('El nombre es obligatorio y debe tener al menos 2 caracteres.');
    }

    if (!emailRegex.test(email)) {
      errors.push('Debes ingresar un correo electronico valido.');
    }

    if (!message || message.length < 10) {
      errors.push('El mensaje es obligatorio y debe tener al menos 10 caracteres.');
    }

    if (errors.length > 0) {
      return res.status(400).render(
        'home',
        buildViewModel({
          formErrors: errors,
          oldInput: { name, email, message }
        })
      );
    }

    const newMessageId = await ContactMessage.create({ name, email, message });
    console.log('Mensaje de contacto guardado con ID:', newMessageId);

    return res.status(201).render(
      'home',
      buildViewModel({
        formSuccess: 'Gracias por tu mensaje. Te respondere lo antes posible.',
        oldInput: { name: '', email: '', message: '' }
      })
    );
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  submitContact
};
