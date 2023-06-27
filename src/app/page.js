'use client'

import CardBuy from '@/components/CardBuy'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h2>BitX MarketPlace</h2>
        <Image src="/images/logo.png" alt='logo' width={50} height={45} className={styles.logo}/>
      </header>
      <div>
          <CardBuy/>
      </div>
    </main>
  )
}
