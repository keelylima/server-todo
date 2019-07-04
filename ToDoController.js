const { connect } = require('./ToDoRepository');
const toDoModel = require('./ToDoSchema');
connect(); 

const getAll = async () => {
    return toDoModel.find((error, todos) => {
        if(error) {
            console.error(error)
        }
        return todos;
    });
}

const add = (tarefa) => {
    const novaTarefa = new toDoModel(tarefa);
    return novaTarefa.save();
}

const remove = (id) => {
    return toDoModel.findByIdAndDelete(id)
}


module.exports = {
    getAll,
    add,
    remove
}