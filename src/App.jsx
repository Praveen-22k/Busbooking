import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Home from './pages/Home'
import Service from './pages/Service';
import Help from './pages/Help';
import Signin from "./pages/Signin";
import Login from './pages/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/help' element={<Help/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/user' element={<Signin/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
      </Routes>
      
      </BrowserRouter>
        
    </>
  )
}

export default App
