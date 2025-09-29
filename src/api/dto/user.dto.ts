import type { User } from '@/types/user';

export const mapUserResponse = (data: User[]): User[] =>
  data.map((user) => ({
    ...user,
    name: user.name.trim()
  }));
