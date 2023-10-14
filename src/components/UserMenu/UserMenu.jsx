import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/thunk';

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);

  const handleLogOut = () => {
    dispatch(logoutThunk());
    navigate('/');
  };

  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <p>Wellcome {name}</p>
      <IconButton area-label="login" onClick={handleLogOut}>
        Log out
      </IconButton>
    </div>
  );
};

export default UserMenu;
