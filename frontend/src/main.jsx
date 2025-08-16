import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import LoginPage from "./pages/LoginPage.jsx";
import Header from './components/Header.jsx';


const router = createBrowserRouter([
  {
    path:"/login",
    element: <LoginPage/>
  },
  {
    path:"/",
    element: <Header/>
  }
]);



createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
