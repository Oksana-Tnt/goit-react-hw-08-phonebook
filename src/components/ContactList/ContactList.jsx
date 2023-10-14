import Contact from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Loader from 'components/Loader/Loader';
import { fetchContactsThunk } from 'redux/contacts/thunk';
import { useEffect } from 'react';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const status = useSelector(state => state.contacts.status);
  const auth = useSelector(state => state.auth.isLoading);
  const filterContact = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  console.log(contacts);
  console.log(auth);

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.FULFILLED) {
    return (
      <ul className="list-group">
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className="list-group-item justify-content-md-center">
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;
};
export default ContactList;
