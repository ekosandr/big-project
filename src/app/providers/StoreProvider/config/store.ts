import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateShema } from './StateShema';

export default function createReduxStore(initialState?: StateShema) {
    const rootReducers: ReducersMapObject<StateShema> = {
        user: userReducer,
        loginForm: loginReducer,
    };
    return configureStore<StateShema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
