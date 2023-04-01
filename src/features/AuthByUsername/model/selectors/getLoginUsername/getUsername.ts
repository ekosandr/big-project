import { StateShema } from 'app/providers/StoreProvider/config/StateShema';

export const getLoginUsername = (state: StateShema) =>
    state?.loginForm?.username || '';
