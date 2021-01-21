import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
          <title>Mandip Gurung</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          Thank you. You reached Gurung.
        </div>
        But the website is yet to come. See you Soon!
      </main>
    </div>
  )
}
