import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from 'redux/contacts/thunk';
import { Button, Td } from '@chakra-ui/react';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Td textAlign="center" fontSize="lg">
        {name}
      </Td>
      <Td textAlign="center" fontSize="lg">
        {number}
      </Td>
      <Td textAlign="center">
        <Button
          onClick={() => dispatch(deleteContactsThunk(id))}
          area-label="Delete contact"
          colorScheme="red"
          size="sm"
          w="50px"
        >
          <RiDeleteBin6Fill />
        </Button>
      </Td>
    </>
  );
};

export default Contact;
