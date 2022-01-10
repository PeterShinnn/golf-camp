'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'demo',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'AlisterMacKenzie@user.io',
        username: 'Alister MacKenzie',
        hashedPassword: bcrypt.hashSync('password1'),
      },
      {
        email: 'demo2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password2'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
