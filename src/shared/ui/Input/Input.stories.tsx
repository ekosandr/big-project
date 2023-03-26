import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';
import 'app/styles/index.scss';
export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithValue = Template.bind({});
WithValue.args = {
    value: 'string',
};
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    placeholder: 'string',
};
