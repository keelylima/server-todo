const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ToDoSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    tarefa: {type: String, require: true}, 
    nome: {type: String},
    idade: {type: Number},
    profissao: {type: String}
})

const toDoModel = mongoose.model('todo-list', ToDoSchema, 'todo-list');

module.exports = toDoModel;