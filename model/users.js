'use strict'
module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define('users', {
        // Model attributes are defined here
        id: {
            autoIncrement: true,
            primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING
          // allowNull defaults to true
        },
        role_id: {
            type: Sequelize.INTEGER,
          },
      }, {
        // Other model options go here
      });
      users.associate = (Models) => {
        users.belongsTo(Models.roles, {
            foreignKey: 'role_id',
            targetKey: 'id',
        });
    }
      // `sequelize.define` also returns the model
      console.log(users === sequelize.models.users); // true
      return users;

}
