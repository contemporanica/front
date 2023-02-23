export interface AuthResponse {
  ok: boolean;
  uid?: string;
  username?: string;
  token?: string;
  msg?: string;
}

export interface User {
  uid: string;
  username: string;
}
