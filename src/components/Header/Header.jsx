import React from 'react';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { IconButton } from '@chakra-ui/react';

const Header = () => {
  const { isLoading } = useSelector(state => state.auth);

  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Phonebook</span>
        {isLoading ? <UserMenu /> : <AuthNav />}
      </div>
    </nav>
  );
};

export default Header;
