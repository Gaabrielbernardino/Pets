import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import {UserStorage} from './UserContext'
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import User from './Components/User/User';
import Photo from './Components/Photo/Photo'
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserStorage>
      <Header/>
      <main className="AppBody">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route path="foto/:id" element={<Photo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="perfil/:user" element={<UserProfile />} />
        <ProtectedRoute path="conta/*" element={<User />} />
        </Routes>
        </main>
      <Footer/>
      </UserStorage>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
