import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';

export default {
  title: 'Demos/Page',
  component: Page,
  argTypes: {
    colorTheme: {
      control: {
        type: 'radio',
      },
      options: ["light", "dark"]
    }
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const PagePrimary = Template.bind({});

PagePrimary.parameters = {
  design: {
    type: 'figma',
    url: "https://www.figma.com/file/JT1ZMUqCxdt7MZbfrIxfNQ/Ky-Pham-Portfolio?node-id=0%3A1&t=HpIQMeuAkTvE0azb-1"
  }
}