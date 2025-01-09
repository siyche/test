import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  // Initial state for characters is an empty array
  const [characters, setCharacters] = useState([]);

  // Function to remove a character by index
  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => i !== index);
    setCharacters(updated);
  }

  // Function to update the list with a new person (passed from the Form component)
  function updateList(person) {
    setCharacters([...characters, person]);
  }

  return (
    <div className="container">
      {/* Pass updateList to Form as a prop */}
      <Form handleSubmit={updateList} />

      {/* Pass both characters and removeOneCharacter to Table as props */}
      <Table
        characterData={characters}
        removeCharacter={removeOneCharacter}
      />
    </div>
  );
}

export default MyApp;