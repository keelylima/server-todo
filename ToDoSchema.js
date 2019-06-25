const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ToDoSchema = new Schema({
    _id: {type: mongoose.Schema.Types.Object, auto: true},
    tarefa: {type: String, required: true}, 
    idade: {type: Number, }, //não esquecer de colocar require em todos
})

const toDoModel = mongoose.model('todo-list', ToDoSchema, 'todo-list');

module.exports = { toDoModel };