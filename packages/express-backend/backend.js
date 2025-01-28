import express from 'express';
import cors from 'cors';
import userServices from './models/user-services.js';

const app = express();
app.use(express.json());
app.use(cors());

// GET route to filter users by name and/or job
app.get('/users', (req, res) => {
  const { name, job } = req.query;
  userServices.getUsers(name, job)
    .then((users) => res.json({ users_list: users }))
    .catch((err) => res.status(500).send(err.message));
});

// POST route to add a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  userServices.addUser(newUser)
    .then((createdUser) => res.status(201).json(createdUser))
    .catch((err) => res.status(500).send(err.message));
});

// DELETE route to remove a user by ID
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  userServices.deleteUserById(id)
    .then((deletedUser) => {
      if (deletedUser) {
        res.status(204).send();
      } else {
        res.status(404).send('User not found.');
      }
    })
    .catch((err) => res.status(500).send(err.message));
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
