'use client';
import Link from "next/link";
import styles from "../../styles/alertCard.module.css";
import pendingStyles from "../../styles/pendingAlert.module.css";

export default function Pending() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>⏳ Pagamento Pendente</h1>
        <p className={styles.cardText}>
          Estamos aguardando a confirmação do seu pagamento. 🔄
        </p>
        <div className={pendingStyles.pendingAlert}>
          ⏰ Pagamento em análise!
        </div>
        <Link className={styles.link} href="/">
          👆 Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
