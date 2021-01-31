import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../Components/NavBar';
import Header from '../../Components/Header';

import UserPage from '../../Pages/User';
import Statistics from '../../Pages/Statistics';
import Projects from '../../Pages/Projects';
import CreateProject from '../../Pages/CreateProject'

import { Switch, Route, useRouteMatch } from 'react-router-dom';

const PageFrame = (props) => {
  let { path } = useRouteMatch();
  return(
    <div className="d-flex">
      <NavBar/>
      <Container>
        <Header/>
        <Switch>
          <Route path={`${path}/me`}>
            <UserPage/>
          </Route>
          <Route path={`${path}/statistics`}>
            <Statistics/>
          </Route>
          <Route path={`${path}/projects`}>
            <Projects/>          
          </Route>
          <Route path={`${path}/create`}>
            <CreateProject/>
          </Route>
          <Route path={`${path}/`}>
            <h1>The default page</h1>
          </Route>
        </Switch>
      </Container>
    </div>
  )
};

export default PageFrame;