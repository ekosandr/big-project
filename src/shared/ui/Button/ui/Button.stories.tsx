import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonSize, ThemeButton } from './Button';
import 'app/styles/index.scss';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: ThemeButton.CLEAR,
};
export const Outline = Template.bind({});
Outline.args = {
    children: 'text',
    theme: ThemeButton.OUTLINE,
};
export const BackgroundL = Template.bind({});
BackgroundL.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    size: ButtonSize.L,
    square: true,
};
export const BackgroundXLInverted = Template.bind({});
BackgroundXLInverted.args = {
    children: '<',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
