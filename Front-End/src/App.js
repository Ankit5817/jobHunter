import Header from "./Header/Header";
import './App.css'
import Home from "./Home/Home";
import Register from "./Register/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import UserHome from "./UserHome/UserHome";
import AppStates from "./Context/AppStates";
import ForgotPass from "./ForgotPass/ForgotPass";
import ResetPass from "./ResetPass/ResetPass";
import About from './About/About'
import WishList from "./WishList/WishList";
import Profile from './Profile/Profile'
import AdminPage from "./AdminPage/AdminPage";

function App() {

  return (
    <div>
      <AppStates>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home/:email" element={<UserHome />} />
            <Route path='/forgot/password' element={<ForgotPass />} />
            <Route path='/reset/password/:email/:token' element={<ResetPass />} />
            <Route path='/about' element={<About />} />
            <Route path='/wishList/:email' element={<WishList />} />
            <Route path='/profile/:email' element={<Profile />} />
            <Route path='/admin' element={<AdminPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppStates>
    </div>
  );
}

export default App;
