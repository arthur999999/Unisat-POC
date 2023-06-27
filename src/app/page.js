import CardBuy from '@/components/CardBuy'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h2>BitX MarketPlace</h2>
      </header>
      <div>
          <CardBuy/>
      </div>
    </main>
  )
}
