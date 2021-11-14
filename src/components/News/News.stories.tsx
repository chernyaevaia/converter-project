import { ComponentStory, ComponentMeta } from '@storybook/react';
import News from './News';

export default {
    title: 'News',
    component: News
} as ComponentMeta<typeof News>

const Template: ComponentStory<typeof News> = () => <News/>

export const RecentNews = Template.bind({})
RecentNews.args = {}

