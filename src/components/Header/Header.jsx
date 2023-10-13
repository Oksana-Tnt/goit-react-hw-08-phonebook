import React from 'react';
import IconButton from 'components/IconButton/IconButton';


const Header = () => {

  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success"> Phonebook</span>      
       
        <IconButton  area-label="Add contact">
          Log in
        </IconButton>
        <IconButton  area-label="Add contact">
          Sign up
        </IconButton>
      </div>
    </nav>
  );
};

export default Header;
