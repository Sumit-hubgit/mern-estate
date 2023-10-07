import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signin from "./pages/SignIn";
import SignOut from "./pages/SignUp";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Profile from "./pages/Profile";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sign-in" element={<SignIn/>}/>
        <Route path="/Sign-out" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}
