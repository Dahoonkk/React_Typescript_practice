import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/layout';
import { RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import Login from './routes/login';
import CreateAccount from './routes/create-account';
import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/loading-screen';

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
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    // wait for DB
    setTimeout(() => setLoading(false), 2000);
    // setLoading(false);    
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <div className="bg-blue-950">
        {isLoading ? <LoadingScreen/> : <RouterProvider router={router} />}
      </div>
    </>
  )
}

export default App
