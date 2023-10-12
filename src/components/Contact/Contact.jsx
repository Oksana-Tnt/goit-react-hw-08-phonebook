import React from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import IconButton from 'components/IconButton/IconButton';
import { useDeleteContactsMutation } from 'redux/contactsAPI';

const Contact = ({ id, name, number }) => {
const [deleteContacts, {isLoading:isDeleting}]=useDeleteContactsMutation();
  return (
    <>
    {isDeleting && <h1>deleting...</h1>}
    <div className="d-grid gap-2 d-flex justify-content-between">
      {name} : {number}
      <IconButton
        onClick={() => deleteContacts(id)}
        area-label="Delete contact"
      >
        <RiDeleteBin6Fill />
      </IconButton>
    </div>
    </>
  );
};

export default Contact;
