import React, { createContext, useMemo, useReducer } from 'react';
import MainHeader from '../components/main/MainHeader';

const context = createContext();
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
    <context.Provider
      value={useMemo(() => ({ state, dispatch }), [state, dispatch])}
    >
      <MainHeader {...state} />
      {children}
    </context.Provider>
  );
}

export default context;
export { MainHeaderProvider };
