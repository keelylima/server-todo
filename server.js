const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./ToDoController');

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => {
    controller.getAll()
    .then((listatodos) => res.send(listatodos));
})

server.post('/', (req, res) => {
    controller.add(req.body)
    .then(tarefa => {
        const _id = tarefa._id
        res.send(_id);
    })
    .catch(error => {
        console.log(error);
    })
})

server.delete('/:id', (req, res) => {
    controller.remove(req.params.id)
    .then((tarefa) => {
        if(!tarefa) {
            res.sendStatus(404)
        } else {
            res.sendStatus(204)
        }
    })
})

server.listen(3000);