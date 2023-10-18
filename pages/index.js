import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>
        <ul>
          <li>
            <Link href="/router" className={styles.link}>基于文件的路由</Link>
          </li>
          <li>
            {/* <Link href="/router">router</Link> */}
          </li>
        </ul>
      </main>
    </div>
  )
}
