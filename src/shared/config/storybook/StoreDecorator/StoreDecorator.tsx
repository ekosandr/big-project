import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateShema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator =
    (
        state: DeepPartial<StateShema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>,
    ) =>
    (StoryComponent: Story) => {
        return (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
    };
