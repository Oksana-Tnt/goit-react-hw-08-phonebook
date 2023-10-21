import { Button } from '@chakra-ui/react';

import React from 'react';

import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const Navigation = () => {
  return (
    <>
      <NavLink to="/">
        <Button mr={5} colorScheme="red" size="sm" w="50px">
          <AiFillHome />
        </Button>
      </NavLink>
    </>
  );
};

export default Navigation;
