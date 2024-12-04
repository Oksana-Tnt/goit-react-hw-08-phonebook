import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React from 'react';
import backgroundImg from '../images/benjaminrobyn-jespersen-Ai9_QJaZfMc-unsplash.jpg';
import backgroundImgMobile from '../images/grey-gradient-background-1080-x-1920-mva29ml67gjxd6ht.jpg';
import { Box, Button, Wrap } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/home');
  };
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1220px)' });
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
          onClick={handleLogin}
        >
          Log in
        </Button>
      </Wrap>
      <RegistrationForm />
    </Box>
  );
};

export default RegisterPage;
