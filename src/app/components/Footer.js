import styles from "../styles/jersey.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>© 2025 JerseyStore — Todos os direitos reservados</p>
      <div className={styles.footerLinks}>
        <a href="/rotas/not">Política de Privacidade</a>
        <a href="/rotas/not">Termos de Uso</a>
        <a href="/rotas/not">Contato</a>
      </div>
    </footer>
  );
}
