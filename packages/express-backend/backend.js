import express from 'express';
const app = express();
const port = 8000;

// Sample user data
const users = {
  users_list: [
    { id: "xyz789", name: "Charlie", job: "Janitor" },
    { id: "abc123", name: "Mac", job: "Bouncer" },
    { id: "ppp222", name: "Mac", job: "Professor" },
    { id: "yat999", name: "Dee", job: "Aspiring actress" },
    { id: "zap555", name: "Dennis", job: "Bartender" }
  ]
};

// Helper function to find users by name
const findUserByName = (name) => {
  return users["users_list"].filter(user => user["name"] === name);
};

// GET route for /users
app.get("/users", (req, res) => {
  const name = req.query.name;  // Get the query parameter "name" from the URL
  if (name != undefined) {
    let result = findUserByName(name);  // Find users by the specified name
    result = { users_list: result };  // Wrap the result in the "users_list" object
    res.send(result);  // Send the filtered users as the response
  } else {
    res.send(users);  // If no name is provided, send all users
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
