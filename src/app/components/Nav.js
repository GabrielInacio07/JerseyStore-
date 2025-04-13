"use client";

import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🏀 JerseyStore</div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/rotas/not">Produtos</Link>
        <Link href="/rotas/not">Sobre</Link>
        <Link href="/rotas/not">Contato</Link>
      </div>
    </nav>
  );
}
