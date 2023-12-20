import React, { createContext, useContext, useMemo, useReducer } from 'react';
import MainHeader from '../components/main/MainHeader';

const MainHeaderContext = createContext();
const initialState = {
  title: 'Gaza',
  iconType: 'menu',
  withShopIcon: true,
  showBadge: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state = initialState, { type, payload }) => {
  if (type) {
    return { ...state, ...payload };
  }
  return state;
};

function MainHeaderProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainHeaderContext.Provider
      value={useMemo(() => ({ state, dispatch }), [state, dispatch])}
    >
      <MainHeader {...state} />
      {children}
    </MainHeaderContext.Provider>
  );
}

function useMainHeader() {
  const context = useContext(MainHeaderContext);

  if (context === undefined) {
    throw new Error('No context provided for useMainHeader');
  }
  return context;
}

export default MainHeaderContext;
export { MainHeaderProvider, useMainHeader };
