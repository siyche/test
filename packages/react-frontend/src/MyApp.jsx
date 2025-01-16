import React, { useState, useEffect } from 'react';
import Table from './Table';
import Form from './Form';

// Function to fetch users from the backend
function fetchUsers() {
  const promise = fetch("http://localhost:8000/users");
  return promise;
}

// Function to post a new user to the backend
function postUser(person) {
  const promise = fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  });

  return promise;
}

// Function to delete a user by ID
function deleteUser(id) {
  const promise = fetch(`http://localhost:8000/users/${id}`, {
    method: "DELETE",
  });

  return promise;
}

function MyApp() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json()) // Parse the response as JSON
      .then((json) => setCharacters(json["users_list"])) // Set the characters state with the data
      .catch((error) => { console.log(error); }); // Log any errors
  }, []); // Empty dependency array means this runs only once when the component mounts

  function removeOneCharacter(index) {
    const id = characters[index].id; // Get the ID of the user to be deleted
    deleteUser(id)
      .then((res) => {
        if (res.status === 204) {
          const updated = characters.filter((character, i) => i !== index);
          setCharacters(updated); // Remove the character from the frontend
        } else {
          console.log("Failed to delete user. Server responded with:", res.status);
        }
      })
      .catch((error) => {
        console.log("Error deleting user:", error);
      });
  }

  function updateList(person) {
    postUser(person)
      .then((res) => {
        if (res.status === 201) {
          res.json()
            .then((json) => {
              setCharacters((prev) => [...prev, json]); // Add the new user with ID to the list
            });
        } else {
          console.log("Failed to add user. Server responded with:", res.status);
        }
      })
      .catch((error) => {
        console.log("Error posting user:", error);
      });
  }

  return (
    <div className="container">
      <Form handleSubmit={updateList} />

      <Table
        characterData={characters}
        removeCharacter={removeOneCharacter}
      />
    </div>
  );
}

export default MyApp;
