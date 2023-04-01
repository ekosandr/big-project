import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from './ReducerManager';
import { StateShema } from './StateShema';

export default function createReduxStore(initialState?: StateShema) {
    const rootReducers: ReducersMapObject<StateShema> = {
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateShema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
