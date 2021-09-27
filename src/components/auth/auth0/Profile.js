import React from "react";

const Profile = ({ user }) => {
  console.log(user);
  return (
    <div>
      <img src={user.picture} alt={user.name} width="200px"/>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;