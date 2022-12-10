/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.raw(`  CREATE TABLE tests (
    id_test int unsigned NOT NULL AUTO_INCREMENT,
    name varchar(45) DEFAULT NULL,
    number int DEFAULT NULL,
    PRIMARY KEY (id_test),
    UNIQUE KEY id_test_UNIQUE (id_test)
  )`)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.raw(`DROP TABLE IF EXISTS tests;`)
};
