import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nav } from './Navs';
import { ThemeType } from 'types/enums/enum';
import NavbarsModel from "assets/__mocks__/navbars.json";

export default {
  title: 'Design System/Navbar',
  component: Nav,
  argTypes: {
    colorTheme: {
      control: {
        type: 'radio',
      },
      options: ["light", "dark"]
    }
  },
  parameters: {
    backgrounds: {
      disable: false
    }
  },
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args, { globals: { theme } }) => <Nav {...args} colorTheme={theme} />;

export const Primary = Template.bind({});
Primary.args = {
  colorTheme: ThemeType.LIGHT,
  size: 'small',
  data: NavbarsModel
}