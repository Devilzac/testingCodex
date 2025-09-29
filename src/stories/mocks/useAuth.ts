import { computed, ref } from 'vue';

type LoginHandler = (email: string, password: string) => Promise<void> | void;
type LogoutHandler = () => Promise<void> | void;

const token = ref<string | null>(null);
const isAuthenticated = computed(() => token.value !== null);

let customLogin: LoginHandler | null = null;
let customLogout: LogoutHandler | null = null;

const defaultLogin: LoginHandler = async (email) => {
  token.value = `token-for-${email}`;
};

const defaultLogout: LogoutHandler = async () => {
  token.value = null;
};

const execute = async <T extends LoginHandler | LogoutHandler>(
  handler: T,
  fallback: T,
  ...args: Parameters<T>
) => {
  const fn = handler ?? fallback;
  await fn(...args);
};

export const useAuth = () => ({
  token,
  isAuthenticated,
  login: async (email: string, password: string) => {
    await execute(customLogin, defaultLogin, email, password);
  },
  logout: async () => {
    await execute(customLogout, defaultLogout);
  }
});

export const useAuthStore = () => ({
  token,
  isAuthenticated,
  login: async (email: string, password: string) => {
    await execute(customLogin, defaultLogin, email, password);
  },
  logout: async () => {
    await execute(customLogout, defaultLogout);
  }
});

export const __setAuthToken = (value: string | null) => {
  token.value = value;
};

export const __mockAuthHandlers = (handlers: {
  login?: LoginHandler | null;
  logout?: LogoutHandler | null;
} = {}) => {
  customLogin = handlers.login ?? null;
  customLogout = handlers.logout ?? null;
};

export const __resetAuthMocks = () => {
  customLogin = null;
  customLogout = null;
  token.value = null;
};
