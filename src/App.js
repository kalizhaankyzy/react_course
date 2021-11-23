import {Link, BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Profile from "./components/Profile"
import Home from "./components/Home"
import Friends from './components/Friends'
import Friend from './components/Friend'
import { useState } from 'react'
import Login from './components/Login'
export default function App(){
  const [authed, setAuthed] = useState(false);
  function CheckIsAuthed({ authed, children }) {
    return authed
      ? children
      : <Navigate to="/login" replace />;
  }
  return (
    <main>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link" >Home </Link>
            </li>
            <li class="nav-item">
              <Link to="/profile" class="nav-link">Profile</Link>
            </li>
            
            <li class="nav-item">
              <Link to="/friends" class="nav-link" >Friends</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul class="navbar-nav mr-auto">
          {!authed ?
            <li class="nav-item"><Link class="nav-link" to="/login">Login</Link> </li>
            : <a class="nav-link" onClick={()=>setAuthed(false)}>Logout</a>
          }
          </ul>
        </div>
        </nav>
        <Routes>
          <Route path="/profile" element={
            <CheckIsAuthed authed={authed}>
              <Profile/>
            </CheckIsAuthed>
          } />
          <Route path="/friends" element={
            <CheckIsAuthed authed={authed}>
              <Friends/>
            </CheckIsAuthed>} >
            <Route path=":friend" element={<Friend />} />
          </Route>
          <Route path="/login" element={<Login authed={authed} setAuthed={setAuthed} />} />
          <Route path="/" element={<Home authed={authed}/>} />
        </Routes>
      </Router>
    </main>
  )
};