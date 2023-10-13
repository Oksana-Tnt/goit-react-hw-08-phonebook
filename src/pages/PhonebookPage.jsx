
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import FormContact from 'components/FormContact';
import IconButton from 'components/IconButton/IconButton';
import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { IoPersonAddSharp } from 'react-icons/io5';

const PhonebookPage = () => {

    const [isShowModal, setIsShowModal] = useState(false);

    const toggleModal = () => {
      setIsShowModal(!isShowModal);
    };

  return (
    <>
      <h1>
        Phonebook
        <IconButton onClick={toggleModal} area-label="Add contact">
          <IoPersonAddSharp />
        </IconButton>
      </h1>
      <Filter />
      {isShowModal && (
        <Modal closeModal={toggleModal}>
          <FormContact closeModal={toggleModal} />
        </Modal>
      )}
      <ContactList />
    </>
  );
};

export default PhonebookPage;
