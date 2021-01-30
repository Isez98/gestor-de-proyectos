import React from 'react';
import Header from '../../Components/Header';

const UserPage = ({userData}) => {
  let message = `This is ${userData}'s page`
  return(
    <div>
      <Header/>
      <h1>{message}</h1>
    </div>
  );
}

export default UserPage;