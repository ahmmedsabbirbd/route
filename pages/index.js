import styles from '@/styles/Home.module.css' 
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        Hi
        <Link href="/blog">Blog</Link>

      </main>
    </>
  )
}
