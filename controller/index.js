const db = require('../sql/index')
exports.getAll = async (req, res, next) => {
    console.log('getAll');
    try {
        console.log(db.users);
        const user = await db.users.findAll();
        console.log(user);
        res.send(user);
    } catch (error) {
        console.log(error);
    }
};