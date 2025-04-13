import Link from "next/link";
import styles from "../../styles/jersey.module.css";

export default function Pending() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>⏳ Pagamento Pendente</h1>
        <p className={styles.cardText}>
          Estamos aguardando a confirmação do seu pagamento. 🔄
        </p>
        <div className={styles.pendingAlert}>
          ⏰ Pagamento em análise!
        </div>
        <Link className={styles.link} href="/">
          👆 Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
