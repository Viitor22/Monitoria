'use client'
import "./style.css";
import "../../globals.css";
import img from "../../assets/hero.png"

import { useRouter } from 'next/navigation'
import Link from 'next/link';

const HeaderHome = () => {
    const router = useRouter()

    return (
        <>
        <header className="navbar">
            <div className="logo">MancadaMonitoria</div>
            <nav>
            <Link href="/" className="link">Home</Link>
            <Link href="/courses" className="link">Cursos</Link>
            <Link href="#" className="link">Contato</Link>
            <button className="aluno-btn">Já sou aluno</button>
            </nav>
        </header>
        </>
    )
}

export default HeaderHome;