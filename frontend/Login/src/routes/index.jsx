import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from '../pages/Login/index';
import { Register } from '../pages/Register/index';
import Home  from '../pages/Home/index';


export const AppRouter = () => {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            
        </Routes>
      </Router>
    );
};
