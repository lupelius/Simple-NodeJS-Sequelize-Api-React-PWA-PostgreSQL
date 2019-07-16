module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Friends',
      [
        {
          firstName: 'John',
          lastName: 'Fenneck',
          email: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Jo',
          lastName: 'Alabaster',
          email: 'albert@physicsdepartment.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Gill',
          lastName: 'Pascuale',
          email: 'pascaley@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Derek',
          lastName: 'Charlie',
          email: 'john@doe.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Anna',
          lastName: 'Einstein',
          email: 'an@physicsdepartment.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Bella',
          lastName: 'Pascal',
          email: 'bel@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@doe.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Albert',
          lastName: 'Einstein',
          email: 'albert@physicsdepartment.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Blaise',
          lastName: 'Pascal',
          email: '',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Friends', null, {});
  }
};
