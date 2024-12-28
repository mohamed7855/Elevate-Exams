export interface Token {
  setToken(token: string): void;
  getToken(): string | null;
  removeToken(): void;
}
