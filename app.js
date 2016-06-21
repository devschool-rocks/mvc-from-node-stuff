var app = require('express')();

var initApp = function (app) {
  app.set('view engine', 'pug');
  app.set('views', "./app/views");
  app.listen(3000);
};

app.get('/', function (req, res) {
  res.render("homepage/index");
});

app.get('/contact-us', function (req, res) {
  res.render("homepage/contact-us");
});

initApp(app);
