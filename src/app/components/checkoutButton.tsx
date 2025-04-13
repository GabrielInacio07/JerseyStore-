'use client'
import styles from '../styles/jersey.module.css'

interface Product{
    title: String,
    price: Number,
    quantity: Number
}


export default function CheckoutButton({title,price,quantity}:Product){

    const handlePayment = async () =>{
        const response = await fetch('/api/mpago',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({title,price,quantity})

        })

        const data = await response.json()
        if(data.id){
            window.location.href = `http://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${data.id}`;
        }
        
    }

    return(
        <button className={styles.buyButton} onClick={handlePayment}>Comprar</button>
    )
}