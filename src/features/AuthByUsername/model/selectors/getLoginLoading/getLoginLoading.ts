import { StateShema } from 'app/providers/StoreProvider/config/StateShema';

export const getLoginLoading = (state: StateShema) =>
    state?.loginForm?.isLoading || false;
