import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Header } from './Header';
import { ThemeType } from 'types/enums/enum';

export default {
  title: 'Demos/Header',
  component: Header,
  decorators: [withDesign],
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
    backgrounds: {
      disable: false
    }
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderPrimary = Template.bind({});
HeaderPrimary.args = {
  colorTheme: ThemeType.DARK,
};

HeaderPrimary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/JT1ZMUqCxdt7MZbfrIxfNQ/Ky-Pham-Portfolio?node-id=1%3A991&t=4L6f039uI34teVJS-1",
  },
}