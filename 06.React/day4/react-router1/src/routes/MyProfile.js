import React from 'react';
import { Redirect } from 'react-router-dom';

const isLogged = true;

const MyProfile = () => {
  return (
    <div>
      {
        !isLogged && <Redirect to="/login" /> 
      }
      My Profile
    </div>
  );
};

export default MyProfile;