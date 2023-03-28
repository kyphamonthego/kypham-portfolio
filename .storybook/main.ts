const path = require('path');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    '@storybook/addon-viewport',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: '@storybook/react',
  },
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        // for development mode
        // lazyCompilation: true,
      }
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src/"),
      'assets': path.resolve(__dirname, "../src/stories/assets"),
      'components': path.resolve(__dirname, "../src/stories/components"),
      'fonts': path.resolve(__dirname, "../src/stories/assets/fonts"),
      'icons': path.resolve(__dirname, "../src/stories/assets/icons"),
      'images': path.resolve(__dirname, "../src/stories/assets/images"),
      'styles': path.resolve(__dirname, "../src/stories/assets/styles"),
      'types': path.resolve(__dirname, "../src/types/"),
      'constants': path.resolve(__dirname, "../src/constants/"),
    };
    return config;
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  }
}