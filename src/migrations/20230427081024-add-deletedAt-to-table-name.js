'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Priorities',
        'deletedAt',
        {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: null,
        },
      ),
      queryInterface.addColumn(
        'Statuses',
        'deletedAt',
        {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: null,
        },
      ),
      
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    
  }
};

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
