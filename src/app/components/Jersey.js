
import Link from "next/link";
import styles from "../styles/jersey.module.css"; 
import CheckoutButton from "./checkoutButton";


export default async function Jerseys() {
  let data = [];

  try {
    const resposta = await fetch("http://localhost:3000/api");
    data = await resposta.json();
  } catch (error) {
    console.log("Ocorreu um erro");
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Lista das Jerseys</h1>
      <div className={styles.grid}>
        {data.map((jersey, index) => (
          <div key={index} className={styles.card}>
            <img
              src={jersey.imagem}
              alt={`Imagem da ${jersey.nome}`}
              className={styles.cardImage} 
            />
            <h2 className={styles.cardTitle}>{jersey.nome}</h2>
            <p className={styles.cardText}>Tamanho: {jersey.tamanho}</p>
            <p className={styles.price}>Preço: R$ {jersey.preco}</p>
            <CheckoutButton  title={jersey.nome} price={jersey.preco} quantity={1}/>
            <Link href={jersey.rota} className={styles.link}>Ver mais...</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
