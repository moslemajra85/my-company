import httpClient from './httpClient';

export const registerUser = async (data) => {
  const response = await httpClient.post(`/users`, data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await httpClient.post(`/users/login`, data);
  return response.data;
};
