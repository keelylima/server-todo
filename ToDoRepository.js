const mongoose = require('mongoose');

const MONGO_URL = "mongodb://localhost:27017/todo"

function connect() {
    mongoose.connect(MONGO_URL, {useNewUrlParser: true}, function(error) {
        if(error) {
            console.error('Erro show é esse: ', error);
        } else {
            console.log('Ta funcionando sim!')
        }
    })
}

module.exports = { connect }