import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginError', () => {
    test('should return value', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                password: '123',
            },
        };

        expect(getLoginPassword(state as StateShema)).toEqual('123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                isLoading: false,
            },
        };

        expect(getLoginPassword(state as StateShema)).toEqual('');
    });
});
