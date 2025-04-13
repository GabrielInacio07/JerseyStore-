import Link from "next/link";
import styles from "../../styles/jersey.module.css";

export default function Pending(){
    return(
        <div>
            <h1>Pagamento em Andamento ⏳💳...</h1>  
            <Link className={styles.link} href='/'>Home 👆</Link>
        </div>
    )
}