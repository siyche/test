import express from 'express';  // Using ES module syntax
const app = express();
const port = 8000;

// In-memory data
const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspring actress"
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender"
      },
      {
        "id": "qwe123",
        "job": "Zookeeper",
        "name": "Cindy"
      }
    ]
  };

// Function to find a user by ID
const findUserById = (id) => {
  return users["users_list"].find((user) => user["id"] === id);
};

// Function to add a new user
const addUser = (user) => {
  users["users_list"].push(user);  // Add the user to the in-memory list
  return user;  // Return the added user object
};

// GET /users - Return the list of users
app.get("/users", (req, res) => {
  const name = req.query.name;
  if (name != undefined) {
    let result = users["users_list"].filter((user) => user["name"] === name);
    result = { users_list: result };
    res.send(result);
  } else {
    res.send(users);
  }
});

// GET /users/:id - Return a specific user by ID
app.get("/users/:id", (req, res) => {
  const id = req.params.id;  // Capture the 'id' from the URL
  let result = findUserById(id);  // Find user by ID
  if (result === undefined) {  // If user not found, send 404
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);  // Send the user data
  }
});

// POST /users - Add a new user
app.post("/users", (req, res) => {
  const userToAdd = req.body;  // Get the user data from the request body
  addUser(userToAdd);  // Add the user to the list
  res.status(201).send();  // Respond with a 201 Created status
});

// Middleware to parse JSON request bodies
app.use(express.json());  // This middleware parses incoming JSON data

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
