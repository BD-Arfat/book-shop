import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Router/Routs';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <RouterProvider router={router}/>
        </Provider>
    </div>
  );
}

export default App;
