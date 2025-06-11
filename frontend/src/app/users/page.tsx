"use client";
import React, { useEffect, useState } from "react";
import { apiFetch } from "../services/api";

type User = { _id: string; name: string; email: string };

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      setError("");
      try {
        const res = await apiFetch("/users");
        const data = await res.json();
        if (res.ok) {
          setUsers(data);
        } else {
          setError(data.message || "Erro ao buscar usuários");
        }
      } catch {
        setError("Erro de conexão com o backend");
      }
      setLoading(false);
    }
    fetchUsers();
  }, []);

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 24,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px #0001",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#1E635F" }}>
        Usuários cadastrados
      </h2>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li
              key={user._id}
              style={{ borderBottom: "1px solid #eee", padding: "12px 0" }}
            >
              <strong>{user.name}</strong> <br />
              <span style={{ color: "#555" }}>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;
