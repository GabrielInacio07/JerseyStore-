import Link from "next/link";
import Nav from "../../components/Nav";
import styles from "../../styles/jersey.module.css";

export default function Lakers() {
  return (
    <>
      <Nav />
      <main className={styles.container}>
        <div className={styles.card}>
          <img
            src="/image/lakers.jpeg"
            alt="Los Angeles Lakers Jersey"
            className={styles.cardImage}
          />
          <h1 className={styles.cardTitle}>Los Angeles Lakers Jersey</h1>
          <p className={styles.cardText}>
            Camisa oficial dos Lakers, feito para seu estilo e praticas esportivas.
          </p>
          <p className={styles.price}>R$ 99</p>
          <Link href={'/'}><button className={styles.buyButton}>Voltar a pagina de Comprar</button></Link>
        </div>
      </main>
    </>
  );
}
