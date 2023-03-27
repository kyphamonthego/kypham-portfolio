import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './awesome-item.module.css'
import DefaultAwesomeItemImage from '../../../public/hero-avatar.svg'
import iconArrowRight from '../../../public/arrow-right.svg'
import Link from 'next/link'
import { AwesomeItemProps } from '@/types/interfaces'
const inter = Inter({ subsets: ['latin'] })

export default function AwesomeItem(awesome: AwesomeItemProps) {
  return (
    <Link href={`${awesome.slug}`} className={styles.awesome_item}>
      <div className={styles.awesome_content__first}>
        <Image
          className={styles.awesome_item__image}
          src={awesome.imageUrl ? awesome.imageUrl : DefaultAwesomeItemImage}
          width={100}
          height={100}
          alt={`${awesome.slug}`} />
        <div className={styles.awesome_content}>
          <p className={styles.awesome_content__title}>{awesome.title ? awesome.title : "Awesome title"}</p>
          <p className={styles.awesome_content__description}>{awesome.value ? awesome.value : 0}+ Project</p>
        </div>
      </div>
      <Image className={styles.awesome_content__arrow} src={iconArrowRight} alt="Arrow item" />
    </Link>
  )
}
