import { Inter } from 'next/font/google'
import pageStyles from './../../app/page.module.css'
import styles from './awesome.module.css'
import AwesomeItem from './awesome-item'
import Branch from '@/components/branch/branch'
import { AwesomesServiceModel } from '@/stories/assets/__mocks__/awesome.model'
const inter = Inter({ subsets: ['latin'] })

export default function Awesome() {
  return (
    <section id='service' className={`${pageStyles.wrapper} ${styles.wrapper}`}>
      <Branch />
      <div className={styles.awesome}>
        <div className={styles.awesome_service__content}>
          <p className={styles.awesome_service__title}>My Awesome Service</p>
          <p className={styles.awesome_service__description}>Eget malesuada tortor ut sed. Tincidunt viverra malesuada nisl vehicula vestibulum. Ut blandit fermentum, cursus nulla. Imperdiet neque mi convallis quis interdum sagittis.</p>
        </div>
        <div className={styles.awesome_service__project}>
          {AwesomesServiceModel.map((awesome, index) => (
            <AwesomeItem key={index} title={awesome.title} description={awesome.description} slug={awesome.slug} imageUrl={awesome.imageUrl} value={awesome.value} />
          ))}
        </div>
      </div>
    </section>
  )
}
