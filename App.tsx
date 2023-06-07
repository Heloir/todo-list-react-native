import React from 'react';
import RoutesNavigation from './routes';
import { Provider } from 'react-redux';
import { store } from './redux/Store';


export default function App() {
  return (
    <Provider store={store}>
     <RoutesNavigation/>
    </Provider>
  );
}
