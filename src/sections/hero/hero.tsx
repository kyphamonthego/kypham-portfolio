import Image from 'next/image'
import { Inter } from 'next/font/google'
import pageStyles from './../../app/page.module.css'
import styles from './hero.module.css'
import HeroAvatar from '../../../public/hero-avatar.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Hero() {
  return (
    <section id='hero' className={pageStyles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.hero_description}>
          <div className={styles.hero_description__major}>
            Front-End&nbsp;<span>Developer</span>
          </div>
          <div className={styles.hero_description__name}>
            <span>Ky Pham</span>
          </div>
          <div className={styles.hero_description__bar} />
          <div className={styles.hero_description__content}>
            <p>I like blogging, making Youtube videos, Tiktok. In particular, I like to learn about the history, culture, nature, beliefs in each land that I come to as well as the work of a Front-end developer. If you have the same passion for travel and coding as me, don&rsquo;t be shy....</p>
          </div>
          <div className={styles.hero_description__follow}>
            Let&rsquo;s start &nbsp;&nbsp;&nbsp;&nbsp; →
          </div>
        </div>
        <div className={styles.hero_avatar}>
          <Image src={HeroAvatar} alt='hero avatar' />
        </div>
        <div className={styles.hero_experience}>
          <div className={styles.hero_experience__item}>
            <p className={styles.hero_experience__title}>Years of Experience</p>
            <p className={styles.hero_experience__value}>1+</p>
          </div>
          <div className={styles.hero_experience__item}>
            <p className={styles.hero_experience__title}>Complete Project</p>
            <p className={styles.hero_experience__value}>3+</p>
          </div>
          <div className={styles.hero_experience__item}>
            <p className={styles.hero_experience__title}>Video</p>
            <p className={styles.hero_experience__value}>20+</p>
          </div>
          <div className={styles.hero_experience__item}>
            <p className={styles.hero_experience__title}>Place</p>
            <p className={styles.hero_experience__value}>64+</p>
          </div>
        </div>
      </div>
    </section>
  )
}
