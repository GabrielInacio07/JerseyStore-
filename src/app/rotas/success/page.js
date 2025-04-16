'use client';
import Link from "next/link";
import styles from "../../styles/alertCard.module.css";
import successStyles from "../../styles/successAlert.module.css";

export default function Success() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>✅ Pagamento Concluído com Sucesso!</h1>
        <p className={styles.cardText}>
          Valeu por apoiar nosso projeto, sua jersey já está sendo separada! 🔥🏀
        </p>
        <div className={successStyles.successAlert}>
          💸 Seu pagamento foi aprovado!
        </div>
        <Link className={styles.link} href="/">
          👆 Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
