import express from 'express';  // Using ES module syntax
import cors from "cors";
const app = express();
app.use(express.json()); // Enable parsing of JSON in request body
app.use(cors());

const users = {
  users_list: [
    { id: "xyz789", name: "Charlie", job: "Janitor" },
    { id: "abc123", name: "Mac", job: "Bouncer" },
    { id: "ppp222", name: "Mac", job: "Professor" },
    { id: "yat999", name: "Dee", job: "Aspiring actress" },
    { id: "zap555", name: "Dennis", job: "Bartender" },
  ]
};

// Function to find users by name and job
const findUsersByNameAndJob = (name, job) => {
  return users["users_list"].filter(
    (user) =>
      (name ? user["name"] === name : true) && (job ? user["job"] === job : true)
  );
};

// Function to delete a user by ID
const deleteUserById = (id) => {
  const index = users["users_list"].findIndex((user) => user["id"] === id);
  if (index !== -1) {
    users["users_list"].splice(index, 1); // Remove the user from the list
    return true; // Return true if the user was deleted
  }
  return false; // Return false if the user was not found
};

// Function to generate a random ID for a new user
const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9); // Generate a random string to serve as the ID
};

// GET route to filter users by name and/or job
app.get("/users", (req, res) => {
  const { name, job } = req.query; // Get the query parameters for name and job
  let result = findUsersByNameAndJob(name, job); // Find users based on the criteria
  result = { users_list: result }; // Structure the result as users_list
  res.send(result); // Send the filtered list as the response
});

// POST route to add a new user
app.post("/users", (req, res) => {
  const newUser = req.body; // Get the new user data from the request body
  newUser.id = generateRandomId(); // Generate a random ID for the new user
  users["users_list"].push(newUser); // Add the new user to the list
  res.status(201).json(newUser); // Respond with the newly created user and a 201 status
});

// DELETE route to remove a user by ID
app.delete("/users/:id", (req, res) => {
  const id = req.params["id"]; // Get the ID from the URL parameter
  const isDeleted = deleteUserById(id);
  if (isDeleted) {
    res.status(204).send(); // No content response on successful delete
  } else {
    res.status(404).send("User not found.");
  }
});

// Start the server
app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
