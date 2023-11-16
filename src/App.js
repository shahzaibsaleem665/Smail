import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import EmailList from './pages/EmailList';
import AppBar from './pages/AppBar';
import Mail from './pages/Mail';
import Login from './pages/Login';
import SendMail from './components/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './utilities/Firebase';
import Register from './pages/Register';
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // use is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);
  
  return (
    <Router> {/* If no user exsits, open login page otherwise homepage*/}

      {!user ? (
        <Login  path='/login'/>
      ): 
    <div className="app">
      <Header />
      <div className='app__body'>
      <Sidebar />
      <Switch>   {/* Switch is not used anymore with version 6 or higher, I have chosen to use switch -- downgrade your react-router-dom version to 5 or lower. */}
        <Route path='/mail'> {/* This opens when you an email is clicked */}
        <Mail />
        <AppBar />
        </Route>
        <Route path='/'>   {/* This opens when a user is logged in ( Home Page) */}
          <EmailList />
          <AppBar />
        </Route>
      </Switch>
      </div>
  
      {sendMessageIsOpen && <SendMail/>}
      
    </div>
    }
    </Router>
  );
}

export default App;
