function getLandingViewModel() {
  const siteUrl = (process.env.SITE_URL || 'https://soyelpipeaa.com').replace(/\/$/, '');

  return {
    seo: {
      title: 'Felipe Acevedo Agudelo | Desarrollador Full Stack en Medellin',
      description:
        'Portafolio de Felipe Acevedo Agudelo, desarrollador Full Stack y analista de sistemas en Medellin. Desarrollo web, Node.js, Express, React, SQL y APIs REST.',
      keywords:
        'Felipe Acevedo Agudelo, desarrollador Full Stack Medellin, analista de sistemas, Node.js, Express, React, MySQL, PostgreSQL, MongoDB',
      author: 'Felipe Acevedo Agudelo',
      siteUrl,
      canonical: `${siteUrl}/`,
      ogTitle: 'Felipe Acevedo Agudelo | Desarrollador Full Stack en Medellin',
      ogDescription:
        'Portafolio profesional de un desarrollador Full Stack y analista de sistemas en Medellin, Colombia.',
      ogType: 'website',
      ogUrl: `${siteUrl}/`,
      ogImage: ''
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          name: 'Felipe Acevedo Agudelo',
          url: `${siteUrl}/`,
          inLanguage: 'es-CO',
          description:
            'Portafolio profesional de Felipe Acevedo Agudelo, desarrollador Full Stack y analista de sistemas.'
        },
        {
          '@type': 'Person',
          '@id': `${siteUrl}/#felipe-acevedo-agudelo`,
          name: 'Felipe Acevedo Agudelo',
          jobTitle: 'Desarrollador Full Stack y Analista de Sistemas',
          description:
            'Desarrollador Full Stack y analista de sistemas especializado en Node.js, Express, React y bases de datos.',
          url: `${siteUrl}/`,
          email: 'mailto:felipe20015@gmail.com',
          telephone: '+57 302 320 1480',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Medellin',
            addressRegion: 'Antioquia',
            addressCountry: 'CO'
          },
          knowsAbout: [
            'JavaScript',
            'Node.js',
            'Express.js',
            'React',
            'SQL',
            'MySQL',
            'PostgreSQL',
            'MongoDB',
            'APIs REST'
          ]
        }
      ]
    },
    currentYear: new Date().getFullYear()
  };
}

module.exports = {
  getLandingViewModel
};
