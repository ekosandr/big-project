import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateShema } from '../config/StateShema';
import createReduxStore from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateShema;
}

const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
