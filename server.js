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

server.listen(7000);