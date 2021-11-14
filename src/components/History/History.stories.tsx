import { ComponentStory, ComponentMeta } from '@storybook/react';
import History from './History';

export default {
    title: 'History',
    component: History
} as ComponentMeta<typeof History>

const Template: ComponentStory<typeof History> = () => <History/>

export const RecentHistory = Template.bind({})
RecentHistory.args = {}


