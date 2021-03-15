import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";
import { disconnectUser } from "../components/userEffects";
import { launchSequence } from "./appEffects";
import { Authenticate } from '../components/SignUp';
import Profil from "../components/Profil";
import Home from '../pages/Home'
import './Navigation.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NotFoundPage from '../layouts/error'

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: location },
              }}
            />
          )
      }
    />
  );
};

const Navigation = () => {
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  const player = useSelector((state) => state.user.player);
  const isLoading = useSelector((state) => state.app.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(launchSequence());
  }, [dispatch]);
  return isLoading ? (
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  ) : (
      <Router>
        {isAuthenticated ? (
          <Navbar bg="white" variant="light">
            <Container>
              <Navbar.Brand ><Link to="/">
                Blind-Test
        </Link></Navbar.Brand>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                  <li className=' nav-item dropdown'>
                    <Nav.Link><Link to="/game">Game</Link></Nav.Link>
                  </li>
                  <li className=' nav-item dropdown'>
                    <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
                  </li>
                </ul>
                <a className='navbar-btn btn btn-sm btn-primary lift ml-auto' to="/auth"
                  to="/auth"
                  onClick={() => disconnectUser()}>Sign Out</a>
              </div>
            </Container>
          </Navbar>
        ) : undefined}
        <Switch>
          <Route path="/auth">
            <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
              <div className='w-100' style={{ maxWidth: '400px' }}>
                <Authenticate />
              </div>
            </Container>
          </Route>
          {/* <Route path="*" component={NotFoundPage} /> */}
          <PrivateRoute path="/game">
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profil />
          </PrivateRoute>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    );
};

export default Navigation;

