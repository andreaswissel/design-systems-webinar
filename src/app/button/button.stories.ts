import type { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { ButtonComponent } from './button.component';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Atoms/Button',
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
      onIncrement: action('Counter incremented'),
    },
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  name: 'Custom name',
  args: {
    label: 'I am the primary',
  },
};

export const Secondary: Story = {
  args: {
    //✨ use spread operator to pass args
    ...Primary.args,
    label: 'I am the secondary',
  },
};

export const WithPlayFunction: Story = {
  args: {
    ...Primary.args,
    label: 'I am being clicked automatically',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'), {
      delay: 150,
    });

    await userEvent.click(canvas.getByRole('button'), {
      delay: 150,
    });

    await userEvent.click(canvas.getByRole('button'), {
      delay: 150,
    });

    // 👇 Assert DOM structure
    await expect(canvas.getByText('Counter: 3')).toBeInTheDocument();
  },
};
