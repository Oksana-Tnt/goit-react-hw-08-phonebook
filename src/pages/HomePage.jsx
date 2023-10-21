import { AbsoluteCenter, Box, Flex, Heading, Image } from '@chakra-ui/react';
import PhonebookImg from '../images/111220_address_book_red_soda_icon.png';
import backgroundImg from '../images/benjaminrobyn-jespersen-Ai9_QJaZfMc-unsplash.jpg';
import backgroundImgLogged from '../images/grey-gradient-background-1080-x-1920-mva29ml67gjxd6ht.jpg';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <Box
      pl={10}
      pr={10}
      position="relative"
      h="100vh"
      backgroundImage={isLoggedIn ? backgroundImgLogged : backgroundImg}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {isLoggedIn && <UserMenu />}

      <AbsoluteCenter axis="both">
        {isLoggedIn ? (
          <>
            <Flex display="flex" flexDirection="column" justifyItems="center">
              {!isTabletOrMobile && (
                <Heading
                  as="h1"
                  size="x-lg"
                  noOfLines={1}
                  color="red"
                  textShadow="1px 1px black"
                >
                  Wellcome tou your personal phonebook
                </Heading>
              )}
              <ChakraLink
                as={ReactRouterLink}
                to="/phonebook"
                fontSize="30px"
                color="red"
                textShadow="1px 2px black"
                m="6"
                display="flex"
                justifyContent="center"
              >
                <Image
                  src={PhonebookImg}
                  alt="phonebook"
                  boxSize={isTabletOrMobile ? '150px' : '450px'}
                  objectFit="cover"
                />
              </ChakraLink>
            </Flex>
          </>
        ) : (
          <AuthNav />
        )}
      </AbsoluteCenter>
    </Box>
  );
};

export default HomePage;
