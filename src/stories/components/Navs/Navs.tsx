import './navs.scss';
import { NavItemProps } from 'types/interfaces/interfaces';
import { ThemeType } from 'types/enums/enum';

interface NavProps {
  /**
   * How themes should the navbar be?
   */
  colorTheme?: ThemeType.LIGHT | ThemeType.DARK;
  /**
   * How large should the navbar be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * How data should the navbar be?
   */
  data: NavItemProps[];
}
export const Nav = ({ colorTheme, size, data }: NavProps) => {
  return (
    <nav>
      <div className="wrapper">
        <ul className='kypham-nav'>
          {
            Object.values(data).map((item, index) =>
              <>
                <li tabIndex={index} key={index} >
                  <a
                    className={['kypham-nav__item', colorTheme == ThemeType.LIGHT ? "kypham-nav__item--light" : "kypham-nav__item--dark", `kypham-nav__item--${size}`].join(' ')}
                    href={item.slug ? item.slug.toString() : ''}
                  >
                    {item.name}
                  </a>
                </li>
              </>
            )
          }
        </ul>
      </div>
    </nav>
  )
};

