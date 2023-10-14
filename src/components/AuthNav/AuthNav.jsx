import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AuthNav = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signUp');
  };
  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <IconButton area-label="login" onClick={handleLogIn}>
        Log in
      </IconButton>

      <NavLink to="/signup">
        <IconButton area-label="signUp" onClick={handleSignUp}>
          Sign up
        </IconButton>
      </NavLink>
    </div>
  );
};

export default AuthNav;
