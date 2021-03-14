import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { authenticateUser } from "./userEffects";

export const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [canSignIn, setCanSignIn] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const history = useHistory();
  const { from } = useLocation().state || { from: { pathname: "/" } };
  const signInSuccess = () => {
    history.replace(from);
  };
  useEffect(() => {
    // Verify email format is correct
    let emailIsValid = false;
    if (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)) {
      emailIsValid = true;
    }
    // Verify password format is correct
    let passwordIsValid = false;
    // if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password))
    if (password.length >= 6) {
      passwordIsValid = true;
    }
    setCanSignIn(emailIsValid && passwordIsValid);
  }, [email, password]);
  useEffect(() => {
    if (isAuthenticated) history.replace("/");
  }, [isAuthenticated, history]);
  return (
    <>
      <Card className="auth-root">
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Button
                className="w-100"
                onClick={() =>
                  dispatch(authenticateUser(email, password, signInSuccess))
                }
                disabled={!canSignIn}
              >
                Log in
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        You do not already have an account ? Sign in
      </div>
    </>
  );
}
