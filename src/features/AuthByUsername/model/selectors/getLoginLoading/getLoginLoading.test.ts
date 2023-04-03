import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginError', () => {
    test('should return true', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoginLoading(state as StateShema)).toEqual(true);
    });
    test('should return false', () => {
        const state: DeepPartial<StateShema> = {
            loginForm: {
                isLoading: false,
            },
        };

        expect(getLoginLoading(state as StateShema)).toEqual(false);
    });
});
