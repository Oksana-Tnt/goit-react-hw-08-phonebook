import { instance, token } from 'redux/services';

export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);
  token.set(data.token);
  return data;
};

export const login = async body => {
  const { data } = await instance.post('users/login', body);
  token.set(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await instance.post('users/logout');
  token.unset();
  return data;
};

export const fetchCurrenUser = async () => {
  const { data } = await instance.get('users/current');
  return data;
};
