const express = require("express");
const app = express();
const cors = require('cors')
const {request, response} = require("express");

app.use(cors('*'))
app.use(express.json())

const todos = ["Помити посуду", "Погладити кота"]

app.get('/todos/:name', async (request, response) => {
    const searchQuery = request.params.name;

    if (searchQuery) {
        const filterTodo = todos.filter(todo => todo.toLowerCase().includes(searchQuery.toLowerCase()));

        response.send(filterTodo)
    }


})

app.get('/todos', async (request, response) => {
    response.send(todos)
})

app.post('/todos', async (request, response) => {
    const body = request.body

    console.log(body)
    todos.push(body.name)

    response.sendStatus(201)
})
app.listen(8000);
