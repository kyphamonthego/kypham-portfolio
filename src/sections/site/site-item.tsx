import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './site-item.module.css'
import DefaultSiteItemImage from '../../../public/section-avatar.svg'
import QuoteImage from '../../../public/quote.svg'
import Link from 'next/link'
import { SiteItemProps } from '@/types/interfaces'
const inter = Inter({ subsets: ['latin'] })

export default function SiteItem(site: SiteItemProps) {
  return (
    <Link href={site.slug ? site.slug : ''} className={styles.site_item}>
      <Image
        className={styles.site_item__image}
        src={site.imageUrl ? site.imageUrl : DefaultSiteItemImage}
        width={400}
        height={540}
        alt={`${site.slug}`} />
      <div className={styles.site_item__content}>
        <Image src={QuoteImage} alt='❝' width={76} height={150} />
        <p className={styles.site_content__title}>{site.quote ? site.quote : "Site quote"}</p>
        <div className={styles.site_item__group}>
          <p className={styles.site_item__author}>{site.author ? site.author : "Author name"}</p>
          <p className={styles.site_item__major}>{site.major ? site.major : "Major"}</p>
        </div>
      </div>
    </Link>
  )
}
