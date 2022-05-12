
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Login from './Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/shared/Navbar/Navbar';
import NotFound from './Pages/shared/NotFound/NotFound';

function App() {
  return (
    <div className="max-w6xl mx-auto ">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route >
        <Route path='/login' element={<Login />}></Route>
        <Route path='/contact' element={<Login />}></Route>
        <Route path='/review' element={<Login />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
