import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Router/Routs';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <Toaster />
    </div>
  );
}

export default App;
