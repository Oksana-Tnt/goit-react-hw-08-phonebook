import React from 'react';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';

import { Box, Wrap } from '@chakra-ui/react';
import Navigation from 'components/Navigation/Navigation';
import authSelectors from 'redux/auth/auth-selectors';
import backgroundImg from '../../images/gray-concrete-wall.jpg';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        align-content="end"
        gap="20"
        pl={10}
        pr={10}
        position="relative"
        h="50px"
        backgroundImage={backgroundImg}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Wrap spacing="30px">
          <Navigation />
        </Wrap>
        {isLoggedIn && <UserMenu />}
      </Box>
    </>
  );
};

export default Header;
