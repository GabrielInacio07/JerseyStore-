import Link from "next/link";
import styles from "../../styles/jersey.module.css";

export default function Failure() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>❌ Pagamento Recusado</h1>
        <p className={styles.cardText}>
          Infelizmente não foi possível concluir sua compra. 😓
        </p>
        <div className={styles.failureAlert}>
          🚫 Pagamento falhou! Tente novamente.
        </div>
        <Link className={styles.link} href="/">
          👆 Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
