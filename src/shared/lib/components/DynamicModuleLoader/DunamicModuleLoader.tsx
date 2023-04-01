import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateShemaKey } from 'app/providers/StoreProvider/config/StateShema';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducersList = {
    [name in StateShemaKey]?: Reducer;
};

type ReducerListEntry = [StateShemaKey, Reducer];

interface DunamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

const DunamicModuleLoader: FC<DunamicModuleLoaderProps> = ({
    children,
    reducers,
    removeAfterUnmount,
}) => {
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducerListEntry) => {
                store.reducerManager.add(name, reducer);
            },
        );

        if (removeAfterUnmount) {
        }
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([name, reducer]: ReducerListEntry) => {
                        store.reducerManager.remove(name);
                    },
                );
            }
        };
    }, []);

    return <>{children}</>;
};

export default DunamicModuleLoader;
