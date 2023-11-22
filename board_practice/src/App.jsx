import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/layout';
import { RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import Login from './routes/login';
import CreateAccount from './routes/create-account';
import React from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create-account",
    element: <CreateAccount />
  }
])

function App() {

  return (
    <>
      <div className="bg-blue-900 aspect-square ">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
