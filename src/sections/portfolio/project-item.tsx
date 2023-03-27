import { Inter } from 'next/font/google'
import styles from './project-item.module.css'
import DefaultProjectItemImage from '../../../public/hero-avatar.svg'
import Link from 'next/link'
import { ProjectItemProps } from '@/types/interfaces'
import Image from 'next/image'
import { Suspense } from 'react'
import Loading from '@/app/loading'
const inter = Inter({ subsets: ['latin'] })

export default function ProjectItem(project: ProjectItemProps) {
  return (
    <Suspense fallback={<Loading />}>
      <Link href={project.slug ? project.slug : 'Project Id'} className={styles.project_item}>
        <div className={styles.project_content__first}>
          <Image
            className={styles.project_item__image}
            src={project.imageUrl ? project.imageUrl : DefaultProjectItemImage}
            width={360}
            height={270}
            alt={`${project.slug}`} />
          <div className={styles.project_content}>
            <p className={styles.project_content__title}>{project.title ? project.title : "Awesome title"}</p>
            <p className={styles.project_content__varion}>{project.varion ? project.varion : "Varion"}</p>
          </div>
        </div>
      </Link>
    </Suspense>
  )
}
