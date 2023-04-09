
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Page } from './components/layout/page';
import { Home } from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [

        ],
      },
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;