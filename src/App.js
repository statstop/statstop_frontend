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

  const handleLogin = async (credentials) => {
    try {
      const userObject = await loginService.login(credentials)
      setUser(userObject)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
      return true;
          }
    catch (exception) {
      notificationHandler(`Invalid Email or Password`, 'error')
      return false;
    }
  }

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
              element={<Admin/>}
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
