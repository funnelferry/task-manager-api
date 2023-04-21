const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Validator = require("./validator");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let tasks = [
  { id: 1, title: 'Task 1', description: 'Do something', completed: false },
  { id: 2, title: 'Task 2', description: 'Do something else', completed: true }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('The task with the given ID was not found.');
  res.json(task);
});

app.post('/tasks', (req, res) => {
  const task  = req.body;
  const validation = Validator.validateTask(task);
  if (validation.status) {
    const ntask = { id: tasks.length + 1, ...task };
    tasks.push(ntask);
    res.status(201).json(ntask);
  } else {
    return res.status(400).send(validation.message);
  }
});

app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('The task with the given ID was not found.');
  const task_change = req.body;
  const validation = Validator.validateTask(task_change);
  if (!validation.status) return res.status(400).send(validation.message);
  task.title = title;
  task.description = description;
  task.completed = completed;
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('The task with the given ID was not found.');
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  res.json(task);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
