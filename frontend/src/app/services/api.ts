const API_URL = "http://localhost:3000";

export const mockUsers = [
  { _id: "1", name: "João Silva", email: "joao@email.com" },
  { _id: "2", name: "Maria Souza", email: "maria@email.com" },
  { _id: "3", name: "Carlos Lima", email: "carlos@email.com" },
];

export function saveToken(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
}

export function getToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
}

export async function apiFetch(path: string, options: RequestInit = {}) {
  if (path === "/users" && (!options.method || options.method === "GET")) {
    return {
      ok: true,
      json: async () => mockUsers,
      status: 200,
    } as Response;
  }
  const token = getToken();
  const headers = {
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    "Content-Type": "application/json",
  };
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });
  return res;
}

export async function login(email: string, password: string) {
  if (email && password) {
    const token = "mock-token-123";
    saveToken(token);
    return { user: mockUsers[0], token };
  }
  return { error: "Credenciais inválidas" };
}
