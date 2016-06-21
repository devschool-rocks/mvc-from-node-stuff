(function () {

  var createTable = function (knex) {
    return knex.schema.createTable('sick_burns', function (table) {
      table.increments('id').primary();

      table.string('burn')
           .notNullable();

      table.timestamp('created_at')
           .notNullable()
           .defaultTo(knex.raw('now()'));

      table.timestamp('updated_at')
           .notNullable()
           .defaultTo(knex.raw('now()'));
    });
  };

  var dropTable = function (knex) {
    return knex.schema.dropTable('sick_burns');
  };

  exports.up = function(knex, Promise) {
    return createTable(knex);
  };

  exports.down = function(knex, Promise) {
    return dropTable(knex);
  };
}());
