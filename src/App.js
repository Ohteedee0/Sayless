
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
 import Loginsignup from './Pages/loginsignup';
 import Login from './Pages/login';
import Welcome from './Pages/welcome';
import Homepage from './Pages/homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<Loginsignup />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<h2>404 - Page not found</h2>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
