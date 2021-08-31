import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JWT CA Helper</title>
        <meta name="description" content="Auth0 JWT CA Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Helper tool for JWT CA testing
        </p>

      </main>
    </div>
  )
}
