import React, { useState } from "react";

function Form(props) {
  const [person, setPerson] = useState({
    name: "",
    job: ""
  });

  // Handle input change for both name and job fields
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "job") {
      setPerson({ name: person["name"], job: value });
    } else {
      setPerson({ name: value, job: person["job"] });
    }
  }

  // Function to handle form submission, defined inside Form to access the state
  function submitForm(e) {
    e.preventDefault(); // Prevent default form submission behavior
    props.handleSubmit(person); // Call handleSubmit passed from parent with the current person data
    setPerson({ name: "", job: "" }); // Reset the form state to initial values
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange}
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={person.job}
        onChange={handleChange}
      />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}

export default Form;