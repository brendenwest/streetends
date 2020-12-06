import React, {createContext, useContext, useEffect, useState} from 'react';

const StoreContext = createContext();

const useStore = () => {
  const [initialized, setInitialized] = useState(false);
  const [store, setStore] = useState({
    locations: [],
  });

  useEffect(() => {
    if (!initialized) {
      fetch('http://fosetest.org/Street_Ends__Shoreline_.geojson')
        .then((response) => response.json())
        .then((data) => {
          const locations = data.features.map((feature, index) => {
            if (index === 0) {
              console.log(Object.keys(feature.properties));
            }

            return {
              latitude: feature.geometry.coordinates[0],
              longitude: feature.geometry.coordinates[1],
              id: feature.properties.OBJECTID,
              intersection: feature.properties.INTERSECTION,
            };
          });

          setStore({...store, locations});
          setInitialized(true);
        })
        .catch((error) => console.error(error));
    }
  }, [initialized, setInitialized, store, setStore]);

  const getLocation = (id) =>
    store.locations.find((location) => id === location.id);

  return {...store, getLocation, initialized};
};

export const StoreProvider = ({children}) => {
  const store = useStore();
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export default useStoreContext;
