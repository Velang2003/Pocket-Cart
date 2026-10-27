import { http } from "./http";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

// DummyJSON mock admin: username "emilys" is treated as admin
export const ADMIN_USERNAME = "emilys";

export const authService = {
  login: (payload: LoginPayload) =>
    http.post<AuthUser>("/auth/login", {
      username: payload.username,
      password: payload.password,
      expiresInMins: 60,
    }),

  getProfile: (token: string) =>
    fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((r) => r.json()) as Promise<AuthUser>,
};
