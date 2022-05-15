import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/shared/Navbar/Navbar';
import NotFound from './Pages/shared/NotFound/NotFound';
import PrivateAuth from './Pages/Login/PrivateAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="max-w6xl mx-auto ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route >
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/review' element={<Login />}></Route>
        <Route path='/appointment' element={
          <PrivateAuth>
            <Appointment />
          </PrivateAuth>
        }></Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
