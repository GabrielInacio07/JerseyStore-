import Link from "next/link";
import Nav from "../../components/Nav";
import styles from "../../styles/jersey.module.css";

export default function Bulls() {
  return (
    <>
      <Nav />
      <main className={styles.container}>
        <div className={styles.card}>
          <img
            src="/image/bulls.jpeg"
            alt="Chicago Bulls Jersey"
            className={styles.cardImage}
          />
          <h1 className={styles.cardTitle}>Chicago Bulls Jersey</h1>
          <p className={styles.cardText}>
            Camisa oficial dos Bulls, feito para seu estilo e praticas esportivas.
          </p>
          <p className={styles.price}>R$ 69,99</p>
          <Link href={'/'}><button className={styles.buyButton}>Voltar a pagina de Comprar</button></Link>      
        </div>
        
      </main>
      
    </>
  );
}
