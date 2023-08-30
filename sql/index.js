const Sequelize = require("sequelize");
const users = require('../model/users');
const sequelize = new Sequelize(
   'test',
   'root',
   'aA123!@#',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
  
  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.users = require('../model/users')(sequelize, Sequelize);
  db.roles = require('../model/roles')(sequelize, Sequelize);
  (async function connectDB() {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });

     Object.keys(db).forEach((modelName) => {
        console.log('modelName',modelName);
        if (db[modelName].associate) {
            console.log('db[modelName].associate', db[modelName].associate(db));
            db[modelName].associate(db);
        }
    });
  })()
  module.exports = db;

