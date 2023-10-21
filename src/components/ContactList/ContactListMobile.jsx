import { useDispatch, useSelector } from 'react-redux';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Loader from 'components/Loader/Loader';
import { fetchContactsThunk } from 'redux/contacts/thunk';
import { useEffect } from 'react';
import { Card, SimpleGrid } from '@chakra-ui/react';
import ContactMobile from 'components/Contact/ContactMobile';
import EmptyPhonebook from 'components/EmptyPhonebook/EmptyPhonebook';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const ContactListMobile = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const status = useSelector(state => state.contacts.status);
  const auth = useSelector(state => state.auth.token);
  const filterContact = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.FULFILLED) {
    return (
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {filteredContacts.length === 0 && <EmptyPhonebook />}

        {filteredContacts.map(({ id, name, number }) => (
          <Card align="center" backgroundColor="transparent" key={id}>
            <ContactMobile id={id} name={name} number={number} />
          </Card>
        ))}
      </SimpleGrid>
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;
};
export default ContactListMobile;
