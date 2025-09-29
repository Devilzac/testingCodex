/**
 * Representation of a user record within the application.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  active: boolean;
}
