import { Inter } from 'next/font/google'
import pageStyles from './../../app/page.module.css'
import styles from './sites.module.css'
import Carousel from '@/components/carousel/carousel'
const inter = Inter({ subsets: ['latin'] })

export default function Sites() {
  return (
    <section id='sites' className={`${pageStyles.wrapper} ${styles.wrapper}`}>
      <div className={styles.sites}>
        <Carousel />
      </div>
    </section >
  )
}
