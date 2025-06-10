"use client";
import React, { useState } from "react";
import "./style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await login(email, password);
    if (res.token) {
      router.push("/courses");
    } else {
      setError(res.error || "Erro ao fazer login");
    }
  };

  return (
    <div className="body">
      <div className="container-login">
        <div className="login-box">
          <div className="barra">
            <Link href="/" className="flecha">
              &#8592;
            </Link>
            <Link href="/" className="voltar">
              Voltar
            </Link>
          </div>
          <h2 className="h2-login">Login</h2>
          <form onSubmit={handleSubmit} aria-label="Formulário de login">
            <div className="input-form">
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-required="true"
                aria-label="E-mail"
                autoComplete="username"
                aria-invalid={!!error}
              />
            </div>
            <div className="input-form">
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="Senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-required="true"
                aria-label="Senha"
                autoComplete="current-password"
                aria-invalid={!!error}
              />
            </div>
            {error && (
              <div
                role="alert"
                aria-live="assertive"
                style={{ color: "red", marginBottom: 8 }}
              >
                {error}
              </div>
            )}
            <button className="btn-login" type="submit">
              Entrar
            </button>
          </form>
          <p className="criar-conta">
            Não tem uma conta? <Link href="/create">Criar Conta</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
