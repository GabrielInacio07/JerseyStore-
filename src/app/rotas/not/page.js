import Link from "next/link";
import styles from "../../styles/not.module.css";

export default function Not() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>🚧 Página em Construção</h1>
        <p className={styles.cardText}>
          Estamos finalizando os últimos detalhes para entregar algo massa pra você! 🏗️✨
        </p>
        <div className={styles.pendingAlert}>
          🔄 Em breve novidades por aqui!
        </div>
        <Link className={styles.link} href="/">
          👆 Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
