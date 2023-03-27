import { addons } from "@storybook/addons";
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED } from "@storybook/core-events";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeType } from 'types/enums/enum';
import { KYPHAM_VIEWPORTS } from 'constants/viewports';
import 'styles/global.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    disable: false,
    values: [
      { name: ThemeType.LIGHT, value: ThemeType.LIGHT_VALUE },
      { name: ThemeType.DARK, value: ThemeType.DARK_VALUE }
    ]
  },
  options: {
    storySort: {
      method: '',
      order: [],
      locales: '',
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...KYPHAM_VIEWPORTS
    },
    defaultViewport: 'someDefault',
  },
  a11y: {
    // Optional selector to inspect
    element: '#root',
    config: {
      rules: [
        {
          // The autocomplete rule will not run based on the CSS selector provided
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          // Setting the enabled option to false will disable checks for this particular rule on all stories.
          id: 'image-alt',
          enabled: false,
        },
      ],
    },
    // Axe's options parameter
    options: {},
    // Optional flag to prevent the automatic check
    manual: true,
  },
}

let channel = addons.getChannel();
const storyListener = (args) => {
  if (args.args.colorTheme) {
    let colorTheme = args.args.colorTheme;
    channel.emit(UPDATE_GLOBALS, {
      globals: {
        theme: colorTheme,
        backgrounds: colorTheme === ThemeType.DARK ? { name: ThemeType.DARK, value: ThemeType.DARK_VALUE } : { name: ThemeType.LIGHT, value: ThemeType.LIGHT_VALUE }
      }
    });
  }
};

function setupBackgroundListener() {
  channel.removeListener(STORY_ARGS_UPDATED, storyListener);
  channel.addListener(STORY_ARGS_UPDATED, storyListener);
}

setupBackgroundListener();
