import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Ambient from './pages/ambient';
import Focus from './pages/focus';
import Settings from './components/Settings';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "ambient",
    element: <Ambient />,
  },
  {
    path: "focus",
    element: <Focus />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
]);

const AppWithRouter = () => {
  const [selectedBackground, setSelectedBackground] = useState('default');

  const handleBackgroundChange = (background) => {
    setSelectedBackground(background);
  };

  return (
    <React.StrictMode>
      <RouterProvider router={router} selectedBackground={selectedBackground} handleBackgroundChange={handleBackgroundChange}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWithRouter />);

reportWebVitals();