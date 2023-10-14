import { dellToken, instance, setToken } from 'redux/services';

export const signUp = async body => {
  const { data } = await instance.post('/users/signup', body);
  return data;
};

export const login = async body => {
  const { data } = await instance.post('users/login', body);
  setToken(data.token);
  console.log(data);
  return data;
};

export const logout = async () => {
  const { data } = await instance.post('users/logout');
  dellToken();
  return data;
};

export const getCurrenUser = async () => {
  const { data } = await instance.get('users/current');
  return data;
};
