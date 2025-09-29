import type { User } from '@/types/user';

import httpClient from '../clients/httpClient';

/**
 * Retrieve the list of users from the backend service.
 *
 * @returns A promise resolving to the collection of users.
 */
export const fetchUsers = async () => {
  const { data } = await httpClient.get<User[]>('/users');
  return data;
};
