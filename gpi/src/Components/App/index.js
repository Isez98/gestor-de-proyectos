import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PrivateRoute from '../../Utils/PrivateRoute';
import Login from '../../Pages/Login';
import Forgot from '../../Pages/Forgot';
import Register from '../../Pages/Register';
import Statistics from '../../Pages/Statistics';
import UserPage from '../../Pages/User';

function App() {
  const [userName, setUserName] = useState('');
  
  const getUser = (data) => {
    setUserName(data);
  }

  return (
    <Router>
      <div className="App bg-primary w-100">
        <Switch>
          <Route path="/forgot">
            <Forgot/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Route path="/login">
            <Login userData={getUser}/>
          </Route>
          <PrivateRoute exact path={`/${userName}`}>
            <UserPage userData={userName}/>
          </PrivateRoute>
          <Route path="/">
            <Redirect to="/login"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;