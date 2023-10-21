import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/thunk';
import Contact from 'components/Contact/Contact';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Loader from 'components/Loader/Loader';
import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

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
      <TableContainer justifyContent="center">
        <Table size="lg">
          <Thead>
            <Tr>
              <Th textAlign="center" fontSize="large" color="black">
                Name
              </Th>
              <Th textAlign="center" fontSize="large" color="black">
                Number
              </Th>
              <Th textAlign="center" fontSize="large" color="black">
                Delete
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredContacts.map(({ id, name, number }) => (
              <Tr key={id}>
                <Contact id={id} name={name} number={number} />
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;
};
export default ContactList;
