var db = require('../services/db');

module.exports = db.Model.extend({
  tableName: 'sick_burns',
  hasTimestamps: true
});
