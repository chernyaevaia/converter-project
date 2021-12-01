import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Converter } from './Converter';

export default {
  title: 'Converter',
  component: Converter,
} as ComponentMeta<typeof Converter>;

const Template: ComponentStory<typeof Converter> = () => <Converter />;

export const CurrencyConverter = Template.bind({});
CurrencyConverter.args = {};
