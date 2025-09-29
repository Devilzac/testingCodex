import httpClient from '../clients/httpClient';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const login = async (payload: LoginPayload) => {
  const { data } = await httpClient.post<LoginResponse>('/auth/login', payload);
  return data;
};

export const logout = async () => {
  await httpClient.post('/auth/logout');
};
