'use client'
import "./style.css";
import "../../globals.css";

import Link from 'next/link';

const HeaderHome = () => {

    return (
        <>
        <header className="navbar">
            <div className="logo">MancadaMonitoria</div>
            <nav>
            <Link href="/" className="link">Home</Link>
            <Link href="/courses" className="link">Cursos</Link>
            <Link href="#" className="link">Contato</Link>
            <Link href="/login" className="aluno-btn">Já sou aluno</Link>
            </nav>
        </header>
        </>
    )
}

export default HeaderHome;