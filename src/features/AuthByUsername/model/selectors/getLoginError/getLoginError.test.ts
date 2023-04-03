import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                error: 'error',
            },
        };

        expect(getLoginError(state as StateShema)).toEqual('error');
    });
    test('should work', () => {
        const state: DeepPartial<StateShema> = {};

        expect(getLoginError(state as StateShema)).toEqual(undefined);
    });
});
