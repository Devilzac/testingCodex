import { computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';

import { authApi } from '@/api/endpoints';
import { useUserStore } from '@/store/user.store';

/**
 * Pinia store managing authentication state and actions.
 */
export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore();

  const token = computed(() => userStore.token);
  const isAuthenticated = computed(() => Boolean(token.value));

  /**
   * Authenticate a user and persist the received token in the user store.
   *
   * @param email - User email credential.
   * @param password - User password credential.
   */
  const login = async (email: string, password: string) => {
    const { token } = await authApi.login({ email, password });
    userStore.setToken(token);
  };

  /**
   * Clear the authentication state both locally and on the backend.
   */
  const logout = async () => {
    await authApi.logout();
    userStore.clear();
  };

  return {
    token,
    isAuthenticated,
    login,
    logout
  };
});

/**
 * Composition function exposing the auth store and its reactive state to components.
 *
 * @returns Reactive auth state and bound auth actions.
 */
export const useAuth = () => {
  const store = useAuthStore();
  const { token, isAuthenticated } = storeToRefs(store);

  return {
    token,
    isAuthenticated,
    login: store.login,
    logout: store.logout
  };
};
