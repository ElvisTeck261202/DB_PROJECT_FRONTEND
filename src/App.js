import logo from './logo.svg';
import './App.css';
import { Login } from './pages/login';
import { HomePage } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Class } from './pages/Class';
import { Instructor } from './pages/Instructor';
import { Rooms } from './pages/Rooms';
import { Devices } from './pages/Devices'
import { Squash } from './pages/Squash'
import { Member } from './pages/Member';
import { Reservation } from './pages/Reservation';
import { ProtectedRoute, Verify } from './pages/Components/ProtectedRoute';
import Cookies from 'js-cookie';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
    <ToastContainer/>
<Routes>

<Route element={<Verify c = {Cookies.get('Session')}/>}> 
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login/>}/>
      </Route>

    <Route element= {<ProtectedRoute c ={Cookies.get('Session')}/>}>
    <Route path = "/home" element = {<HomePage/>}/>
    <Route path = "/class" element = {<Class/>}/>
    <Route path = "/instructor" element = {<Instructor/>}/>
    <Route path = "/room" element = {<Rooms/>}/>
    <Route path = "/device" element = {<Devices/>}/>
    <Route path = "/squash" element = {<Squash/>}/>
    <Route path = "/member" element = {<Member/>}/>
    <Route path = "/reservation" element = {<Reservation/>}/>
    </Route>
  </Routes>
  </>
  );
}

export default App;
