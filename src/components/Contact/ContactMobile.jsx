import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from 'redux/contacts/thunk';
import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';

const ContactMobile = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <CardHeader>
        <Heading size="md"> {name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{number}</Text>
      </CardBody>
      <CardFooter>
        <Button
          onClick={() => dispatch(deleteContactsThunk(id))}
          area-label="Delete contact"
          colorScheme="red"
          size="sm"
          w="50px"
        >
          <RiDeleteBin6Fill />
        </Button>
      </CardFooter>
    </>
  );
};

export default ContactMobile;
