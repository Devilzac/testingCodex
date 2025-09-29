import { computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';

import { authApi } from '@/api/endpoints';
import { useUserStore } from '@/store/user.store';

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore();

  const token = computed(() => userStore.token);
  const isAuthenticated = computed(() => Boolean(token.value));

  const login = async (email: string, password: string) => {
    const { token } = await authApi.login({ email, password });
    userStore.setToken(token);
  };

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
