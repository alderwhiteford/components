import type { Meta, StoryObj } from '@storybook/react';

import Link from '.';

const meta: Meta<typeof Link> = {
    component: Link,
}

export default meta;
type Story = StoryObj<typeof meta>;
 
export const RotatingLink = {
  args: {
    text: 'Some cool component'
  },
} satisfies Story;