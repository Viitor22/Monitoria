import Link from "next/link";

const Header = () => (
  <header
    style={{
      width: "100%",
      background: "#1E635F",
      padding: "16px 0",
      marginBottom: 32,
      boxShadow: "0 2px 8px #0002",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 32,
    }}
  >
    <nav style={{ display: "flex", gap: 32 }}>
      <Link
        href="/"
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 18,
          textDecoration: "none",
        }}
      >
        Home
      </Link>
      <Link
        href="/courses"
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 18,
          textDecoration: "none",
        }}
      >
        Cursos
      </Link>
      <Link
        href="/users"
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 18,
          textDecoration: "none",
        }}
      >
        Usuários
      </Link>
      <Link
        href="/login"
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 18,
          textDecoration: "none",
        }}
      >
        Login
      </Link>
      <Link
        href="/create"
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 18,
          textDecoration: "none",
        }}
      >
        Criar Conta
      </Link>
    </nav>
  </header>
);

export default Header;
