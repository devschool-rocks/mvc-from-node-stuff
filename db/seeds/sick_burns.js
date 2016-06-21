exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('sick_burns').del(),
    knex('sick_burns').insert({burn: 'You got Trump hair'})
  );
};

