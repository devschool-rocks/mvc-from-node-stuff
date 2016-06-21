require('dotenv').config();

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

app.get('/sick-burns', function (req, res) {
  var SickBurn = require('./app/models/sick_burn');
  SickBurn.fetchAll().then(function(data) {
    var state = {
      sick_burns: data.map(function(sb) {
        return { id: sb.id,
                 burn: sb.attributes.burn, 
                 created_at: sb.attributes.created_at,
                 updated_at: sb.attributes.updated_at };
      })
    };
    res.render("sick-burns/index", state);
  });
});

initApp(app);
