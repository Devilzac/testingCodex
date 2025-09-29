import { ref } from 'vue';

import { usersApi } from '@/api/endpoints';
import { mapUserResponse } from '@/api/dto/user.dto';
import type { User } from '@/types/user';

/**
 * Composition function providing reactive state and helpers for fetching users.
 *
 * @returns Reactive references and a loader function that orchestrates the user request lifecycle.
 */
export const useUsers = () => {
  const users = ref<User[]>([]);
  const loading = ref(false);
  const error = ref<unknown>(null);

  /**
   * Fetch the users list and update the reactive state with the result.
   */
  const fetchUsers = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await usersApi.fetchUsers();
      users.value = mapUserResponse(response);
    } catch (err) {
      error.value = err;
      users.value = [];
    } finally {
      loading.value = false;
    }
  };

  return {
    users,
    loading,
    error,
    fetchUsers
  };
};
