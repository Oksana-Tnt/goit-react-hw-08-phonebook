import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import { Box, Button, Wrap } from '@chakra-ui/react';

import backgroundImg from '../images/benjaminrobyn-jespersen-Ai9_QJaZfMc-unsplash.jpg';
import backgroundImgMobile from '../images/grey-gradient-background-1080-x-1920-mva29ml67gjxd6ht.jpg';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate('/signUp');
  };

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  return (
    <Box
      h="100vh"
      backgroundImage={isTabletOrMobile ? backgroundImgMobile : backgroundImg}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Wrap justify="end" pt={4} pr={4}>
        <Button
          type="button"
          colorScheme="red"
          size="sm"
          width="75px"
          onClick={handleSignUp}
        >
          Sign up
        </Button>
      </Wrap>

      <LoginForm />
    </Box>
  );
};

export default LoginPage;
