import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { logoutThunk } from 'redux/auth/thunk';

import { BiLogOut } from 'react-icons/bi';

import UploadAvatar from 'components/UploadAvatar/UploadAvatar';

import Modal from 'components/Modal/Modal';
import { deleteAvatar } from 'redux/avatar/avatarSlice';
import { useMediaQuery } from 'react-responsive';

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutThunk());
    dispatch(deleteAvatar());
    navigate('/');
  };
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  const preview = useSelector(state => state.avatar.preview);
  const name = useSelector(authSelectors.getUserName);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 375px)' });
  return (
    <>
      <Wrap
        align="center"
        justify={isTabletOrMobile ? 'center' : 'space-between'}
        pt={4}
      >
        <WrapItem>
          <Tag size="lg" colorScheme="grey" borderRadius="full">
            <Avatar
              src={preview}
              size="md"
              name="User avatar"
              ml={-1}
              mr={2}
              onClick={toggleModal}
            />

            <TagLabel color="red" textShadow="1px 1px black" pl={2}>
              Hello, {name}
            </TagLabel>
          </Tag>
        </WrapItem>

        {isShowModal && (
          <Modal closeModal={toggleModal}>
            <UploadAvatar />
          </Modal>
        )}
        <WrapItem>
          <Button colorScheme="red" size="sm" w="50px" onClick={handleLogOut}>
            <BiLogOut />
          </Button>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default UserMenu;
