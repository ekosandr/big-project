import { StateShema } from 'app/providers/StoreProvider/config/StateShema';

export const getLoginError = (state: StateShema) => state?.loginForm?.error;
