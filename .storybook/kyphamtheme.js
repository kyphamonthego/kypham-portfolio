import { create } from '@storybook/theming';
import kypham_logo_gradient from '../src/stories/assets/icons/kypham-logo-gradient.svg'
export default create({
  base: 'dark',
  brandTitle: 'Ky Pham Storybook',
  brandUrl: '#',
  brandImage: kypham_logo_gradient,
  brandTarget: '_self',
});