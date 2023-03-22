import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';
import 'app/styles/index.scss';
export default {
    title: 'shared/Button',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
    isOpen: true,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    isOpen: true,
};
