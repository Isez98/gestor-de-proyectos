import React, { useState } from 'react';
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
          <Route path="/guest">
            <PageFrame guest />
          </Route>
          <Route path="/login">
            <Login userData={getUser}/>
          </Route>
          <PrivateRoute path={`/${userName}`}>
            <PageFrame userData={userName} />
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