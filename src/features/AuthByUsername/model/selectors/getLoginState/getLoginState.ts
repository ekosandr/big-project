import { StateShema } from 'app/providers/StoreProvider/config/StateShema';

export const getLoginState = (state: StateShema) => state?.loginForm;
