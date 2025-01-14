import express from 'express';  // Using ES module syntax
const app = express();
const port = 8000;

const users = {
  users_list: [
    { id: "xyz789", name: "Charlie", job: "Janitor" },
    { id: "abc123", name: "Mac", job: "Bouncer" },
    { id: "ppp222", name: "Mac", job: "Professor" },
    { id: "yat999", name: "Dee", job: "Aspiring actress" },
    { id: "zap555", name: "Dennis", job: "Bartender" }
  ]
};

const findUserById = (id) => {
  return users["users_list"].find((user) => user["id"] === id);
};

app.get("/users", (req, res) => {
  const name = req.query.name;
  if (name != undefined) {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;  // Capture 'id' from the URL
  let result = findUserById(id);  // Find user by ID
  if (result === undefined) {  // If user not found, send 404
    res.status(404).send("Resource not found.");
  } else {
    res.send(result);  // Send the user data
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
