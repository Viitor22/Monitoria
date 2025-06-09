import React from "react";
import "./style.css";
import Link from 'next/link';

const Create = () => {
  return (
    <div className="body">
      <div className="container-login">
        <div className="login-box">
          <div className="barra">
            <Link href="/login" className="flecha">&#8592;</Link>
            <Link href="/login" className="voltar">Voltar</Link>
          </div>
          <h2 className="h2-login">Criar conta</h2>
          <form>
            <div className="input-form">
              <input type="email" placeholder="E-mail" required />
            </div>
            <div className="input-form">
              <input type="password" placeholder="Senha" required />
            </div>
            <div className="input-form">
                <input type="password" placeholder="Confirmar senha" required />
            </div>
            <button className="btn-create" type="submit">Entrar</button>
          </form>
          <p className="criar-conta">
            Já possui uma conta? <Link href="/login">Fazer login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Create;