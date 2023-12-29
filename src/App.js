import { Person } from "@mui/icons-material";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import './app.css';
export default function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/timeline" element = {<Profile/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/register" element = {<Register/>}/>
    </Routes>
    </>
  );
}
