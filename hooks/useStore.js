import React, {createContext, useContext, useEffect, useState} from 'react';

const StoreContext = createContext();

const useStore = () => {
    const [initialized, setInitialized] = useState(false);
    const [store, setStore] = useState({
        locations: []
    });
    useEffect(()=>{
        fetch('http://fosetest.org/Street_Ends__Shoreline_.geojson')
        .then((response) => response.json())
        .then((data) => {
            const locations = data.features;
            setStore({ ...store, locations })
        })
        .catch((error) => console.error(error))
        if (!initialized){
            setInitialized(true);
        }
    },
    [initialized, setInitialized, store, setStore])
    return store;
}

export const StoreProvider = ( {children} ) => {
    const store = useStore();
    return(
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}

const useStoreContext = () => useContext(StoreContext)

export default useStoreContext;