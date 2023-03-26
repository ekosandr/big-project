import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const StoreDecorator =
    (state: StateShema) => (StoryComponent: Story) => {
        return (
            <StoreProvider initialState={state}>
                <StoryComponent />
            </StoreProvider>
        );
    };
