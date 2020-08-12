import React, {createContext, useContext, useReducer} from 'react';

export const SoundLayerContext = createContext();

export const SoundLayer = ({initialState, reducer, children}) => (
    <SoundLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </SoundLayerContext.Provider>
);

export const useSoundLayerValue = () => useContext(SoundLayerContext);