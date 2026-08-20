function getLandingViewModel() {
  const siteUrl = (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

  return {
    seo: {
      title: 'Felipe Acevedo Agudelo | Desarrollador Full Stack en Medellin',
      description:
        'Felipe Acevedo Agudelo, desarrollador Full Stack y analista de sistemas en Medellin. Node.js, Express, React, SQL, MongoDB y APIs REST.',
      keywords:
        'Felipe Acevedo Agudelo, desarrollador Full Stack Medellin, analista de sistemas, Node.js, Express, React, MySQL, PostgreSQL, MongoDB',
      author: 'Felipe Acevedo Agudelo',
      siteUrl,
      canonical: `${siteUrl}/`,
      ogTitle: 'Felipe Acevedo Agudelo | Desarrollador Full Stack',
      ogDescription:
        'Desarrollador Full Stack y analista de sistemas en Medellin, Colombia.',
      ogType: 'website',
      ogUrl: `${siteUrl}/`,
      ogImage: ''
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
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
    },
    currentYear: new Date().getFullYear()
  };
}

module.exports = {
  getLandingViewModel
};
