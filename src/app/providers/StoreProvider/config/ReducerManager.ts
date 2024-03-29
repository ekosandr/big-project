import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StateShema, StateShemaKey } from './StateShema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateShema>,
): ReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: StateShemaKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateShema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };

                keysToRemove.forEach((key) => {
                    delete state[key];
                });

                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },

        add: (key: StateShemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: StateShemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            delete reducers[key];
            keysToRemove.push(key);

            combinedReducer = combineReducers(reducers);
        },
    };
}

// const staticReducers = {
//     users: usersReducer,
//     posts: postsReducer,
// };

// export function configureStore(initialState) {
//     const reducerManager = createReducerManager(staticReducers);

//     const store = createStore(reducerManager.reduce, initialState);

//     store.reducerManager = reducerManager;
// }
