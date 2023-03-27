import React from 'react';
import KyphamLogoLight from 'assets/icons/kypham-logo-light.svg'
import KyphamLogoDark from 'assets/icons/kypham-logo-dark.svg'
import './header.scss';
import Image from 'next/image';
import { Nav } from 'components/Navs/Navs';
import Link from 'next/link';
import { ThemeType } from 'types/enums/enum';
import NavbarsModel from 'assets/__mocks__/navbars.json'
interface HeaderProps {
  colorTheme: ThemeType.LIGHT | ThemeType.DARK;
}
export const Header = ({ colorTheme }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div className={["kypham-header"].join(' ')}>
        <Link href={'#'}>
          <Image className={['kypham-header__logo'].join(' ')} src={colorTheme == ThemeType.LIGHT ? KyphamLogoDark : KyphamLogoLight} alt="kypham" width={100} height={100} />
        </Link>
        <Nav data={NavbarsModel ? NavbarsModel : []} colorTheme={colorTheme} />
      </div>
    </div>
  </header>
);
