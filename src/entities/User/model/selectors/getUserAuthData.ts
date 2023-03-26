import { StateShema } from 'app/providers/StoreProvider/config/StateShema';

export const getUserAuthData = (state: StateShema) => {
    return state.user.authData;
};
