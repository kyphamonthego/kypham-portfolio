import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/JT1ZMUqCxdt7MZbfrIxfNQ/Ky-Pham-Portfolio?node-id=1%3A220&t=4L6f039uI34teVJS-1",
  },
}
Primary.parameters = {
  a11y: {
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
    options: {},
    manual: true,
  },
};
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: 'Button',
};

export const Gradient = Template.bind({});
Gradient.args = {
  gradient: true,
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
