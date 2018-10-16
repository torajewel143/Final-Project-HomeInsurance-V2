const Mongo = require('mongoose');
const Schema = Mongo.Schema;

module.exports = Mongo.model('User', new Schema({
    user_id: String,
    password: String,
    role: String, // admin, homeowner, user
}));
