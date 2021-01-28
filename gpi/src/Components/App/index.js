import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from '../../Pages/Login';
import Forgot from '../../Pages/Forgot';
import Register from '../../Pages/Register';
import Statistics from '../../Pages/Statistics';

function App() {
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
            <Login/>
          </Route>
          <Route exact path="/">
            <Redirect to="/login"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;