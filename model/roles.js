const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
module.exports = (sequelize, Sequelize) => {
const roles = sequelize.define('roles', {
    // Model attributes are defined here
    id: {
        autoIncrement: true,
    primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });
  roles.associate = (Models) => {
    roles.hasMany(Models.users, {
        foreignKey: 'role_id',
        sourceKey: 'id',
    });
};
  // `sequelize.define` also returns the model
  console.log(roles === sequelize.models.roles); // true
  return roles;
}