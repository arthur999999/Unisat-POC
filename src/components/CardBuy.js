import { useEffect, useState } from 'react'
import styles from '../app/page.module.css'
import axios from 'axios'

export default function CardBuy() {
    useEffect(()=> {
        console.log('UniSat Wallet is installed!')
      }, [])

    const [valueB, setValueB] = useState(0)

    function setValue(value) {
        setValueB(value)
        console.log(value + "value")
    }
    
    async function connectWallet() {
        try {
            await unisat.requestAccounts()
            alert('yep')
            let amount = 0
            let res = await unisat.getInscriptions(0,10)
            for (const element of res.list) {
                let getAmt = await getBxdx(element.content)
                console.log(getAmt)
                amount = amount + getAmt
                console.log(amount)
            }
            setValueB(amount)
        } catch (error) {
            alert(error)
        }
    }

    async function getBxdx(link) {
        try {
            let response = await axios.get(link)
            if(response.data.tick == "BXDX") {
                return Number(response.data.amt)
            }
            return 0 
        } catch (error) {
            alert(error)
        }
    }

    return(
        <div className={styles.card}>
            Connect your wallet
            <button onClick={() => connectWallet()}>Connect</button>
            <h2>You have {valueB} BXDX</h2>
        </div>

    )
}