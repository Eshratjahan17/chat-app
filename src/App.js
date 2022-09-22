import { Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Home from './Components/Home';
import LogIn from './Components/LogIn/LogIn';
import SignIn from './Components/LogIn/SignIn';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SignIn></SignIn>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
