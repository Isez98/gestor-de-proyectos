import React from 'react';

const UserPage = ({userData}) => {
  let message = `This is ${userData || "User"}'s page`
  return(
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default UserPage;