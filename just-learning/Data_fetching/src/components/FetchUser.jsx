import React, { useState, useEffect } from "react";

const FetchUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>Random User</h1>
        <p>
          Name: {user.name.first} {user.name.last}
        </p>
        <p>Email: {user.email}</p>
        <img src={user.picture.medium} alt="User" />
      </div>
      <hr />
    </>
  );
};

export default FetchUser;
