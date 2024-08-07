import type { Meta, StoryObj } from '@storybook/react';

import Test from '.';

const meta: Meta<typeof Test> = {
    component: Test,
}

export default meta;
type Story = StoryObj<typeof meta>;
 
export const Example = {
  args: {
    test: 'test',
    somethingElse: 'Button',
  },
} satisfies Story;
