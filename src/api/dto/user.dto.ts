import type { User } from '@/types/user';

/**
 * Normalize user data returned by the API to match UI expectations.
 *
 * @param data - Raw user records returned by the backend.
 * @returns A new array containing normalized user objects.
 */
export const mapUserResponse = (data: User[]): User[] =>
  data.map((user) => ({
    ...user,
    name: user.name.trim()
  }));
