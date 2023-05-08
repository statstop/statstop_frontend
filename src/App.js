import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import loginService from "./services/loginService.js"
import Notification from './components/Notification.js'
import { useNavigate } from 'react-router-dom';
import Admin from "./components/Admin"
import DashBoard from "./components/DashBoard"
function App() {
  const [games, setGames] = useState([]);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState(null);
  const [hide, setHide] = useState(false);

  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }

  const handleLogin = async (loginCredentials) => {
    try {
      const userObject = await loginService.login(loginCredentials)
      if (userObject) {
        setUser(userObject)
        window.localStorage.setItem('sessionUser', JSON.stringify(userObject))
      }
      else {
        alert("Log in failed, check username and password entered")
      }

    }
    catch (exception) {
      alert("Log in failed, check username and password entered")
    }
  }
  useEffect(() => {
    const sessionUser = window.localStorage.getItem('sessionUser')
    if (sessionUser)
      setUser(JSON.parse(sessionUser))
    else
      setUser(null)
  }, [])
  return (
    <BrowserRouter>
    
      <div>
        <Header user={user} setUser={setUser} />
        <Routes>
          {user === null && (
            <Route
              path="/"
              element={<DashBoard/>}
            />
          )}
          {user != null && (
            <Route
              path="/admin"
              element={<Admin user={user} setUser={setUser}/>}
            />
          )}
          {user === null && (
            <Route
              path="/login"
              element={
                <Login
                  startLogin={handleLogin}
                  notification={notification}
                  type={notificationType}
                />
              }
            />
          )}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
