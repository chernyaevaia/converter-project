import { ComponentStory, ComponentMeta } from '@storybook/react';
import Graph from './Graph';

export default {
    title: 'Graph',
    component: Graph
} as ComponentMeta<typeof Graph>

const Template: ComponentStory<typeof Graph> = (args) => <Graph {...args}/>

export const RateGraph = Template.bind({})
RateGraph.args = {}