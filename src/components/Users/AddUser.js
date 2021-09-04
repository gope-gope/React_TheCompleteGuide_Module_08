import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+ageInput < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age > 0.",
      });
      return;
    }
    props.onAddUser(nameInput, ageInput);
    setNameInput("");
    setAgeInput("");
  };

  const usernameChangeHandler = (event) => {
    setNameInput(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Name:</label>
          <input
            value={nameInput}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          ></input>

          <label htmlFor="age">Age (Years): </label>
          <input
            value={ageInput}
            id="age"
            type="number"
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
