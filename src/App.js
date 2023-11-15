import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import EmailList from './pages/EmailList';
import AppBar from './pages/AppBar';
import Mail from './pages/Mail';
import Login from './pages/Login';
import SendMail from './components/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './utilities/Firebase';
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
// useEffect(() => {
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       dispatch(login({
//         displayName: user.displayName,
//         email: user.email,
//         photoUrl: user.photoURL
//       }))
//     }
//     else { 
//       dispatch(logout);
//     }
//   })
// })
  
  return (
    <Router>
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
