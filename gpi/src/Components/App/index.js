import React, { useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
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
import PageFrame from '../../Utils/PageFrame'
import { UserContext } from '../../Utils/UserContext';

function App() {
  const [user, setUser] = useState({});

  const value = useMemo(() => ({ user, setUser}), [user, setUser])
  

  return (
    <Router>
      <div className="App bg-primary w-100">
        <Switch>
          <UserContext.Provider value={value}>
            <Route path="/forgot">
              <Forgot/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/guest">
              <PageFrame guest />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path={`/${user.userName}`}>
              <PageFrame />
            </PrivateRoute>
            <Route path="/">
              <Redirect to="/login"/>
            </Route>
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;