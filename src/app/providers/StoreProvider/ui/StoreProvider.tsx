import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateShema } from '../config/StateShema';
import createReduxStore from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateShema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>;
}

const StoreProvider = ({
    children,
    initialState,
    asyncReducers,
}: StoreProviderProps) => {
    const store = createReduxStore(
        initialState as StateShema,
        asyncReducers as ReducersMapObject<StateShema>,
    );

    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
