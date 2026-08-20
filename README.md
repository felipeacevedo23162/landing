# Landing profesional - Felipe Acevedo Agudelo

Aplicacion web tipo landing page profesional construida con Node.js, Express, MariaDB y Handlebars (HBS), usando arquitectura MVC.

## Stack

- Node.js + Express
- Handlebars (HBS) con layout principal y parciales
- MariaDB (mysql2)
- Dotenv para variables de entorno

## Estructura del proyecto

```text
/src
  /config
    db.js
  /controllers
    homeController.js
    contactController.js
    landingData.js
  /models
    ContactMessage.js
  /routes
    mainRoutes.js
  /views
    /layouts
      main.hbs
    /partials
      header.hbs
      footer.hbs
    home.hbs
  /public
    /css
      styles.css
    /js
      validation.js
    /images
server.js
database.sql
.env.example
```

## Configuracion de MariaDB

1. Crea la base de datos y tabla ejecutando:

```sql
SOURCE database.sql;
```

2. Crea tu archivo `.env` copiando `.env.example` y ajusta credenciales:

```env
PORT=3000
SITE_URL=http://localhost:3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=portfolio
```

## Ejecutar el proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar servidor:

```bash
npm start
```

3. Abrir en navegador:

```text
http://localhost:3000
```

## Rutas

- `GET /` renderiza la landing
- `POST /contact` valida y guarda mensajes en MariaDB

## Caracteristicas incluidas

- Arquitectura MVC
- Layout principal reutilizable con parciales (header y footer)
- Secciones: Hero, Sobre mi, Habilidades, Proyectos, Servicios, Contacto
- Formulario funcional con validacion frontend y backend
- SEO (meta tags, Open Graph, estructura semantica H1/H2/H3)
- Accesibilidad basica (skip link, labels, roles)
- Diseno responsive mobile-first con paleta azul y animaciones suaves
- Logs en consola y manejo basico de errores
