"use strict";const bcryptjs = require('bcryptjs');
const { QueryInterface } = require('sequelize');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Luiz',
        email: 'luiz@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        nome: 'João',
        email: 'joão@gmail.com',
        password_hash: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        nome: 'Pedro',
        email: 'pedro@gmail.com',
        password_hash: await bcryptjs.hash('234567', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
    ],
    {},
  ),

  down: () => {},
};
