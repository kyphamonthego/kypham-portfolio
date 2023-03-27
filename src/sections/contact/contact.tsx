"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './contact.module.css'
import iconArrowRight from '../../../public/arrow-right.svg'
import DefaultLogo from '../../../public/me.svg'
import ContactImage from '../../../public/contact.svg'
import Link from 'next/link'
import { ContactProps } from '@/types/interfaces'
import { SocialsModel } from '@/stories/assets/__mocks__/socials.model'
const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  const [social, setSocial] = useState<ContactProps[]>([]);

  useEffect(() => {
    setSocial(SocialsModel);
  }, []);

  return (
    <section id='contact' className={styles.wrapper}>
      <div className={styles.contact}>
        <div className={styles.contact__info}>
          <p className={styles.contact_title}>
            Want to make <br />
            awesome and <br />
            impactful Product?
          </p>
          <Link href={'tel:0909099900'} className={styles.contact_btn}>
            <span className={styles.contact_me}>Contact me</span> &nbsp;&nbsp;
            <Image src={iconArrowRight} width={24} height={24} alt="contact arrow" />
          </Link>
          <div className={styles.contact_follow}>
            <p className={styles.contact_follow__label}>
              Follow me
            </p>
            <div className={styles.contact_follow__socials}>
              {social.map((social, index) => (
                <Link className={styles.contact_item} key={index} href={social.socialUrl ? `${social.type}${social.socialUrl}` : DefaultLogo} target={social.target}>
                  <Image width={46} height={46} src={social.icon ? social.icon : DefaultLogo} alt={social.slug ? social.slug : ''} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Image className={styles.contact_image} src={ContactImage} width={512} height={591} alt="contact" />
      </div>

    </section >
  )
}
