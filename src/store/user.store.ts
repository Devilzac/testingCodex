import { defineStore } from 'pinia';

/**
 * Reactive state shape for the user store.
 */
interface UserState {
  token: string | null;
}

/**
 * Pinia store holding the authenticated user's token.
 */
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: null
  }),
  actions: {
    /**
     * Persist the provided authentication token in the store.
     *
     * @param token - Authentication token returned from the server.
     */
    setToken(token: string) {
      this.token = token;
    },
    /**
     * Remove any stored authentication information.
     */
    clear() {
      this.token = null;
    }
  }
});
