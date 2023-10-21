import { VStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const AuthNav = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signUp');
  };
  return (
    <>
      <VStack spacing="24px">
        <Button colorScheme="red" size="sm" w="75px" onClick={handleSignUp}>
          Sign Up
        </Button>
        <Button colorScheme="red" size="sm" w="75px" onClick={handleLogIn}>
          Log in
        </Button>
      </VStack>
    </>
  );
};

export default AuthNav;
