import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            setUsers(response.data);
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  let renderUser = users.map((user) => {
    return (
      <div key={user.id}>
        <p>{user.name}</p>
      </div>
    );
  });

  return <div>{renderUser}</div>;
};
export default User;
