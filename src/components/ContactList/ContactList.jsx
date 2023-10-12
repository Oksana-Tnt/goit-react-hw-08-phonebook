import React, { useEffect } from 'react';
import Contact from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Loader from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contactsOperations';
import { useFetchContactsQuery } from 'redux/contactsAPI';

const ContactList = () => {
  const { isLoading, data: contacts, isError } = useFetchContactsQuery();

  const { filter } = useSelector(state => state.filter);

  const getFilterContacts = () => {
    if (filter === '') return contacts;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilterContacts();
  console.log(filter);
  return (
    <>
      {isLoading && <Loader />}
      {contacts && (
        <ul className="list-group">
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className="list-group-item justify-content-md-center">
              <Contact id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      )}
      {isError && <ErrorCard />}
    </>
  );
};
export default ContactList;
