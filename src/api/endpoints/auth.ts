import httpClient from '../clients/httpClient';

/**
 * Payload containing the credentials required to initiate a login request.
 */
export interface LoginPayload {
  email: string;
  password: string;
}

/**
 * Response body returned by the authentication endpoint when login succeeds.
 */
export interface LoginResponse {
  token: string;
}

/**
 * Authenticate a user using the provided credentials and retrieve the session token.
 *
 * @param payload - User credentials collected from the login form.
 * @returns A promise resolving to the authentication response containing a token.
 */
export const login = async (payload: LoginPayload) => {
  const { data } = await httpClient.post<LoginResponse>('/auth/login', payload);
  return data;
};

/**
 * Terminate the current user session on the server.
 *
 * @returns A promise that resolves once the logout operation completes.
 */
export const logout = async () => {
  await httpClient.post('/auth/logout');
};
