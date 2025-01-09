import React from 'react';

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Actions</th> {/* Added column for the Delete button */}
      </tr>
    </thead>
  );
}

function TableBody(props) {
  // Mapping over characterData and creating rows with a Delete button
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          {/* Delete button that calls removeCharacter with the current index */}
          <button onClick={() => props.removeCharacter(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <tbody>
      {rows}
    </tbody>
  );
}

function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={props.characterData}
        removeCharacter={props.removeCharacter}
      />
    </table>
  );
}

export default Table;