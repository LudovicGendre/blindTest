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
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';

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
    <div className="loading-root">
      <img
        src="/assets/spinner.svg"
        alt="Loading animation"
        style={{ height: "50px" }}
      />
    </div>
  ) : (
      <Router>
        {isAuthenticated ? (
        <Navbar bg="light" variant= "light">
        <Navbar.Brand ><Link to="/">
          Blind-Test
        </Link></Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link><Link to="/game">Game</Link></Nav.Link>
          <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
          <Nav.Link><Link
            to="/auth"
            onClick={() => disconnectUser()}
            className="sign-out-button"
          >
            Sign Out
          </Link></Nav.Link>
          
        </Nav>
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
          <PrivateRoute path="/game">
          </PrivateRoute>
          <PrivateRoute path="/profile">
          </PrivateRoute>
          <PrivateRoute path="/">
          </PrivateRoute>
        </Switch>
      </Router>
    );
};

export default Navigation;

