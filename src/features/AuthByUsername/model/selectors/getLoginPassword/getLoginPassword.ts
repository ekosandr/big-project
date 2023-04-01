import { StateShema } from 'app/providers/StoreProvider/config/StateShema';

export const getLoginPassword = (state: StateShema) =>
    state?.loginForm?.password || '';
