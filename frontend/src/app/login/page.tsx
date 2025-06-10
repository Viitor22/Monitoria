import React from "react";
import "./style.css";
import Link from 'next/link';

const Login = () => {
  return (
    <div className="body">
      <div className="container-login">
        <div className="login-box">
          <div className="barra">
            <Link href="/" className="flecha">&#8592;</Link>
            <Link href="/" className="voltar">Voltar</Link>
          </div>
          <h2 className="h2-login">Login</h2>
          <form>
            <div className="input-form">
              <input type="email" placeholder="E-mail" required />
            </div>
            <div className="input-form">
              <input type="password" placeholder="Senha" required />
            </div>
            <button className="btn-login" type="submit">Entrar</button>
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