import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edit me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Edit Me
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/nathanwpyle/status/1156299925795364864/photo/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by the Nearest Star
        </a>
      </footer>
    </div>
  )
}
