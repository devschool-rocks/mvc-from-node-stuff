require('dotenv').config();

var app = require('express')();

var initApp = function (app) {
  initKnex();
  initExpress(app);
};

var initExpress = function (app) {
  app.set('view engine', 'pug');
  app.set('views', "./app/views");
  app.listen(3000);
};

var initKnex = function () {
};

app.get('/', function (req, res) {
  res.render("homepage/index");
});

app.get('/contact-us', function (req, res) {
  res.render("homepage/contact-us");
});

initApp(app);
