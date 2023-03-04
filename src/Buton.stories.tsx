// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, Meta, StoryObj } from '@storybook/react';

import Button from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button onClick={() => console.log('clicked!')}>Click Me</Button>;
export const Primary = Template.bind({});
