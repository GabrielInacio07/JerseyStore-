import Link from "next/link";
import styles from "../../styles/jersey.module.css";

export default function Failure(){
    return(
        <div>
            <h1>Falha ao Pagar 🚫💳...</h1>  
            <Link className={styles.link} href='/'>Home 👆</Link>
        </div>
    )
}