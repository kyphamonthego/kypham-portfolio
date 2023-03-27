import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './portfolio.module.css'
import ProjectItem from './project-item'
import iconArrowRight from '../../../public/arrow-right.svg'
import Link from 'next/link'
import { Suspense } from 'react'
import Loading from '@/app/loading'
import { ProjectsModel } from '@/stories/assets/__mocks__/projects.model'
const inter = Inter({ subsets: ['latin'] })

export default function Portfolio() {
  return (
    <section id='portfolio' className={styles.wrapper}>
      <div className={styles.portfolio}>
        <div className={styles.portfolio_header}>
          <p className={styles.portfolio_header__title}>
            Our Portfolio
          </p>
          <Link href={'#'} title="See all" className={styles.portfolio_header__see_all}>
            <span className={styles.btn_see_all}>See all</span>
            <Image src={iconArrowRight} width={24} height={24} alt="see all" />
          </Link>
        </div>
        <div className={styles.portfolio_projects}>
          {ProjectsModel.map((project, index) => (
            <Suspense key={index} fallback={<Loading />}>
              <ProjectItem
                title={project.title}
                varion={project.varion}
                slug={project.slug}
                imageUrl={project.imageUrl}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  )
}
