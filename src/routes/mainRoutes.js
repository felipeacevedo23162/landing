const express = require('express');

const { renderHome } = require('../controllers/homeController');
const { submitContact } = require('../controllers/contactController');

const router = express.Router();

router.get('/', renderHome);
router.get('/robots.txt', (req, res) => {
	const siteUrl = (process.env.SITE_URL || `http://localhost:${process.env.PORT || 3000}`).replace(/\/$/, '');
	res.type('text/plain').send(`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
});

router.get('/sitemap.xml', (req, res) => {
	const siteUrl = (process.env.SITE_URL || `http://localhost:${process.env.PORT || 3000}`).replace(/\/$/, '');
	res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url></urlset>`);
});
router.post('/contact', submitContact);

module.exports = router;
