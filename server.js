require('dotenv').config();
const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');

const mainRoutes = require('./src/routes/mainRoutes');
const { checkDbConnection } = require('./src/config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.locals.json = (value) => JSON.stringify(value);

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src', 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'src', 'views', 'partials')
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src', 'public')));

app.use('/', mainRoutes);

app.use((req, res) => {
  res.status(404).render('home', {
    seo: {
      title: 'Pagina no encontrada | Felipe Acevedo Agudelo',
      description: 'La pagina que buscas no existe.',
      keywords: 'felipe acevedo, full stack, 404',
      author: 'Felipe Acevedo Agudelo',
      ogTitle: 'Pagina no encontrada',
      ogDescription: 'La pagina que buscas no existe.',
      ogType: 'website',
      ogUrl: process.env.SITE_URL || `http://localhost:${PORT}`,
      ogImage: '/images/og-cover.jpg'
    },
    currentYear: new Date().getFullYear(),
    formError: 'La ruta solicitada no existe.'
  });
});

app.use((err, req, res, next) => {
  console.error('Error no controlado:', err);
  res.status(500).render('home', {
    seo: {
      title: 'Error interno | Felipe Acevedo Agudelo',
      description: 'Se presento un error en el servidor.',
      keywords: 'felipe acevedo, full stack, error',
      author: 'Felipe Acevedo Agudelo',
      ogTitle: 'Error interno',
      ogDescription: 'Se presento un error en el servidor.',
      ogType: 'website',
      ogUrl: process.env.SITE_URL || `http://localhost:${PORT}`,
      ogImage: '/images/og-cover.jpg'
    },
    currentYear: new Date().getFullYear(),
    formError: 'Ocurrio un error en el servidor. Intenta de nuevo.'
  });
});

app.listen(PORT, async () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
  await checkDbConnection();
});
