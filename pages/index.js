import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>
        <ul>
          <li>
            <Link href="/router" className="link">基于文件的路由</Link>
          </li>
          <li>
            <Link href="/data-fetch" className="link">数据获取</Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
