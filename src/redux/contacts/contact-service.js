import { instance } from 'redux/services';
import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContacts = async contacts => {
  const { data } = await instance.post('/contacts', contacts);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
