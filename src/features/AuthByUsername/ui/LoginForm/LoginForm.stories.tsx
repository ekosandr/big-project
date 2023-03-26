import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from './LoginForm';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
export default {
    title: 'feature/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
    StoreDecorator({
        loginForm: {
            username: '123',
            password: '123',
        },
    }),
];
