import { useEffect } from 'react'
import styles from '../app/page.module.css'

export default function CardBuy() {
    useEffect(()=> {
        console.log('UniSat Wallet is installed!')
      }, [])

     async function connectWallet() {
        try {
            await unisat.requestAccounts()
            alert('yep')
        } catch (error) {
            alert(error)
        }
    }
    return(
        <div className={styles.card}>
            Connect your wallet
            <button onClick={() => connectWallet()}>Connect</button>
        </div>

    )
}