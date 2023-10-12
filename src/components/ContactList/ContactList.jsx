import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Loader from 'components/Loader/Loader';
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
  console.log(contacts);
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
