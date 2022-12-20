import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./Pages/Login/index";
import SignUp from './Pages/SignUp/index';
import Home from './Pages/Home/index';
import "./index.css";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

function App() {
  return < RouterProvider router={router} />
}

export default App
