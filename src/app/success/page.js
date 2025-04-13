import Link from "next/link";
import styles from '../styles/jersey.module.css'
;

export default function Success(){
    return(
        <div>
            <h1>Pagamento Concluído ✅💸...</h1>  
            <Link className={styles.link} href='/'>Home 👆</Link>
        </div>
    )
}