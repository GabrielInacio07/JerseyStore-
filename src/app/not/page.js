import Link from "next/link";
import styles from '../styles/jersey.module.css'
;

export default function not(){
    return(
        <div>
            <h1>Pagina em Construção...</h1>  
            <Link className={styles.link} href='/'>Home 👆</Link>
        </div>
    )
}