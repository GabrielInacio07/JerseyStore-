import Nav from "../components/Nav";
import styles from "../styles/jersey.module.css";
import Link from "next/link";

export default function Bucks() {
  return (
    <>
      <Nav />
      <main className={styles.container}>
        <div className={styles.card}>
          <img
            src="/image/bucks.jpeg"
            alt="Milwaukee Bucks Jersey"
            className={styles.cardImage}
          />
          <h1 className={styles.cardTitle}>Milwaukee Bucks Jersey</h1>
          <p className={styles.cardText}>
            Camisa oficial dos Bucks, feito para seu estilo e praticas esportivas.
          </p>
          <p className={styles.price}>R$ 80,00</p>
          <Link href={'/'}><button className={styles.buyButton}>Voltar a pagina de Comprar</button></Link>
        </div>
      </main>
    </>
  );
}
