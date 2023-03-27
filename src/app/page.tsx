import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { Header } from 'components/Header/Header'
import { ThemeType } from 'types/enums/enum';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main id='home' className={styles.main}>
      <Header colorTheme={ThemeType.LIGHT} />
      {/* <HeaderHighlight /> */}
      {/* <Header colorTheme={ThemeType.LIGHT} /> */}
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <AwesomeHighlight />
      <Awesome />
      <PortfolioHighlight />
      <Portfolio />
      <PlaceHighlight />
      <Sites />
      <Contact />
      <ScrollTop />
      <Footer /> */}
    </main>
  );
}
