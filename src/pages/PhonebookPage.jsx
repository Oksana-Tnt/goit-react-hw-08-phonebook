import { Box, Button, Center, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import FormContact from 'components/FormContact';

import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { IoPersonAddSharp } from 'react-icons/io5';
import backgroundImg from '../images/grey-gradient-background-1080-x-1920-mva29ml67gjxd6ht.jpg';

import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { AiFillHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ContactListMobile from 'components/ContactList/ContactListMobile';

const PhonebookPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <>
      <Box
        pl={10}
        pr={10}
        position="relative"
        h={contacts.length < 2 || !isTabletOrMobile ? '100vh' : '100%'}
        backgroundImage={backgroundImg}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        {isLoggedIn && <UserMenu />}

        <Center>
          <Heading
            as={isDesktopOrLaptop ? 'h1' : 'h5'}
            size={isDesktopOrLaptop ? 'x-lg' : 'lg'}
            color="red"
            textShadow="2px 2px black"
            m="6"
          >
            Phonebook
          </Heading>
        </Center>

        <Wrap justify="space-between">
          <WrapItem>
            <NavLink to="/">
              <Button mr={5} colorScheme="red" size="sm" w="50px">
                <AiFillHome />
              </Button>
            </NavLink>
          </WrapItem>
          <WrapItem>
            <Button
              colorScheme="red"
              size="sm"
              w="50px"
              onClick={toggleModal}
              area-label="Add contact"
            >
              <IoPersonAddSharp />
            </Button>
          </WrapItem>
        </Wrap>

        {contacts.length > 0 && <Filter />}

        {isShowModal && (
          <Modal closeModal={toggleModal}>
            <FormContact closeModal={toggleModal} />
          </Modal>
        )}
        {isTabletOrMobile ? <ContactListMobile /> : <ContactList />}
      </Box>
    </>
  );
};

export default PhonebookPage;
