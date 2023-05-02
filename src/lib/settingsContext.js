// Core
import { createContext, useState } from 'react';

export const Context = createContext(['', () => null]);

export const SettingProvider = (props) => {
    const { children } = props;
    const state = useState(false);

    return (
        <Context.Provider value = { state }>
            { children }
        </Context.Provider>
    );
};
