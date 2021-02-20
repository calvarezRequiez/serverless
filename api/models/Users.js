const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const Users = mongoose.model('Meal', new Schema({
    email: String, 
    password: String,
    salt: String,
}))

module.exports = Users