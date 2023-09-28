import React from 'react';
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
import SendMail from './components/SendMail';

function App() {
  return (
    <Router>
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
  
      <SendMail/>
      
    </div>
    </Router>
  );
}

export default App;
