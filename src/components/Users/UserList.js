import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <ol key={user.id}>
              {user.name} ({user.age} years old)
            </ol>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
