import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { getLoginUsername } from './getUsername';

describe('getLoginError', () => {
    test('should return value', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                username: 'admin',
            },
        };

        expect(getLoginUsername(state as StateShema)).toEqual('admin');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                isLoading: false,
            },
        };

        expect(getLoginUsername(state as StateShema)).toEqual('');
    });
});
