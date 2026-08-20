const { getLandingViewModel } = require('./landingData');

function renderHome(req, res) {
  res.render('home', getLandingViewModel());
}

module.exports = {
  renderHome
};
