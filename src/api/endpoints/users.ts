import type { User } from '@/types/user';

import httpClient from '../clients/httpClient';

export const fetchUsers = async () => {
  const { data } = await httpClient.get<User[]>('/users');
  return data;
};
