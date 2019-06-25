const { connect } = require('./ToDoRepository');
const { toDoModel } = require('./ToDoSchema');
connect(); 

const getAll = () => {
    return toDoModel.find((error, todos) => {
        if(error) {
            console.error(error)
        }
        return todos;
    });
}

module.exports = {
    getAll
}