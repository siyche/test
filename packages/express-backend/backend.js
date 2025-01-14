import express from 'express';

const app = express();
const PORT = 8000;

// Define the users data structure
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
            job: "Aspiring actress"
        },
        {
            id: "zap555",
            name: "Dennis",
            job: "Bartender"
        }
    ]
};

// Define the root route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Define the /users route to return the list of users
app.get('/users', (req, res) => {
    res.send(users); // Sends the entire users object
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
