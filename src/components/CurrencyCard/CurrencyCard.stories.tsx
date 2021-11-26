import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CurrencyCard } from './CurrencyCard';

export default {
  title: 'Currency Card',
  component: CurrencyCard,
} as ComponentMeta<typeof CurrencyCard>;

const Template: ComponentStory<typeof CurrencyCard> = () => <CurrencyCard />;

export const RateIncrease = Template.bind({});
RateIncrease.args = {};

export const RateDecrease = Template.bind({});
RateDecrease.args = {};

export const Clicked = Template.bind({});
Clicked.args = {};
